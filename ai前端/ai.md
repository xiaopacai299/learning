# AI 前端场景 · 面试简答

---

## 1. 设计一个微前端的AI应用架构，支持独立部署聊天、编辑、可视化等子应用。

**思路**：
（1）前端：使用qiankuan框架或者模块联邦，来支持独立部署发布各个子应用。
（2）前端：封装统一的流式解析和tool_call等工具调用的统一方法。
（3）后端：ai-gateway，做统一的模型管理，日志打印，流式转发，保存apikey，鉴权配额等问题


## 3. AI实时协作场景中，如何避免多用户并发编辑的冲突解决？

不是各自上传完整的文件，而是每个用户最小化改动的时候（比如一个字），发给协同服务，然后广播给其他用户。
使用websocket来实现协同服务，协同服务主要负责：
（1）接收每个人的需改 （2）排顺序  （3）广播给所有人  （4）用算法（yjs中有crdt和ot算法）保证最终一致。

功能	干啥
Presence（在线状态）
看到别人的光标、选区（彩色小标签）
无感合并
冲突少时用户感觉不到，照常打字
手动选版本
结构化内容（表格、组件树）算法合不了时，弹窗「保留 A 还是 B」
快照回滚
改乱了，回到某一版


## 4. 如何设计一个配置驱动的AI工作流引擎，前端通过JSON或自定义节点、连接线、条件分支

工作流：就是在多轮对话中，调用agent时，要遵循这个配置的节点流程进行操作。
工作位置：工作流引擎（独立服务），负责读配置，按图执行，它是包含ai gateway的；
（工作流的llm节点就是流程中的某一步要去问大模型，总结，分析，写文案等）

前端 JSON  ──►  工作流引擎（大脑）
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
    Gateway      业务 API      人工审核
    (LLM)        (Tool)        (等人点通过)

前端实现：
通过vue-flow或者react-flow来根据配置的json实现画布的呈现。
工作流 = `{ nodes, edges, variables }` 
后端实现：
通过独立部署的工作流引擎，来解析配置的json文件。



## 6. 调用AI接口，前端可以通过哪些技术手段帮助降低Token成本？

在本地有rag和小模型的前提下：
（1）rag，不用将整个文档都发给大模型，可以通过rag检索，找到相关的词条，发给大模型。
（2）用规则或者本地小模型先进行判断和回答，如果能解决，就不调大模型。
（3）在indexDB中缓存回答的答案，命中缓存。
（4）本地通过关键字进行模板回复
（5）如果上下文太长，则只用最近的几轮对话发送。


## 7. 设计一个对AI生成内容的质量评估体系，再聊聊前端可以在交互层面提供哪些反馈机制

**质量评估体系**

**思路**：自动 + 人工 + 线上指标，多维打分闭环。

- **维度**：**相关性、事实性/幻觉、完整性、安全合规、格式可用**；RAG 场景加 **引用命中率、答案与片段一致度**。
- **自动评估**：离线 **评测集 + LLM-as-Judge**（rubric 打分）；规则校验（JSON Schema、敏感词、长度）；**Faithfulness** 对比检索片段；A/B 对比不同 prompt/模型。
- **人工评估**：抽检、标注平台、Bad Case 归因（prompt/检索/模型）；高分样本进 **Few-shot**，低分进迭代队列。
- **线上监控**：点赞率、采纳率、重生成率、人工改写率、投诉率；按 **场景/模型/版本** 分桶，阈值告警与回归测试。

**一句话**：多维 rubric + 离线评测集与 Judge + 线上采纳/重写率监控，形成「评估→归因→迭代」闭环。

**前端交互层反馈机制**

**思路**：显式 + 隐式，低摩擦采集，可追溯到单次 generation。

- **显式**：👍/👎 + **原因标签**（不准确/太长/不安全）；**重新生成**、**编辑后采纳**、**复制/丢弃**；RAG 展示 **引用卡片** 可点击溯源；**多版本对比** 选最优。
- **隐式**：停留时长、是否滚动读完、是否立即重写、编辑 diff 长度；可选 **置信度/「可能幻觉」** 轻提示，不替代免责声明。
- **治理**：一键 **举报/标记敏感**；反馈带 `traceId、messageId、model、prompt 版本` 上报，供评估与微调；对低质量流式输出支持 **中途停止** 并记负样本。

**一句话**：前端用点赞原因、编辑采纳、引用溯源和 trace 级上报收集信号，显式为主、隐式为辅，驱动质量评估与模型迭代。

---

## 8. 如何实现前端本地的敏感词过滤与内容安全审核，在发送至AI服务前就进行初步筛查？

**思路**：分层拦截，本地快筛 + 规则可配置，不替代服务端终审。

- **词库引擎**：**Trie / AC 自动机** 多模式匹配，支持敏感词、正则、变体（谐音、插符、全半角归一化）；词库 **JSON 分包 + 版本号**，IndexedDB 缓存，后台静默更新。
- **分层检测**：**L1 关键词**（毫秒级）→ **L2 规则**（手机号、身份证、API Key 模式）→ **L3 可选轻量分类**（Transformers.js  toxicity 小模型，放 Worker）；命中 **block / warn / 脱敏替换** 三档策略。
- **作用点**：用户输入、粘贴、附件文本提取后、**点击发送前** 统一过 `ContentGuard.scan()`；流式输入可 debounce 实时提示；拦截时说明原因并支持 **编辑后重试**，不 silent fail。
- **工程**：逻辑放 **Web Worker** 防卡顿；审计日志本地可关、上报仅传 **命中类型+hash** 不传明文；明确 **前端可被绕过**，服务端 Gateway 必须二次审核。

**一句话**：AC 自动机 + 归一化 + 可选本地小模型做发送前初筛，分级 block/脱敏/提示，Worker 执行，服务端仍做终审。

---

## 9. 设计一个前端实验平台，支持AI模型参数（温度、top_P）、prompt模板UI布局进行A/B测试

**思路**：配置化实验 + 分流 + 指标回流，前端 SDK 统一埋点。

- **实验模型**：实验 = `{ id, variants[], traffic%, 受众规则, 指标 }`；变体可差异 **temperature/top_p/max_tokens**、**prompt 模板 ID**、**UI 布局组件 key**；支持多层实验（模型层与 UI 层正交）。
- **分流**：登录用户 **稳定 hash 分桶**（userId % 100），匿名用 deviceId；同一用户实验期内 **sticky**，避免刷新换组；配置从 **实验中心/API** 拉取，本地缓存 + 降级默认组。
- **前端 SDK**：`useExperiment('chat-layout-v2')` 返回 variant 与参数；Prompt 用 **模板引擎**（变量注入）按 variant 渲染；UI 用 **Feature Flag + 组件映射表** 切换布局；所有请求带 `experimentId、variantId`。
- **指标**：核心 **采纳率、重生成率、会话时长、Token 消耗、点赞率**；事件经 BFF 上报，实验看板按 variant 对比；显著性由后端或分析平台算，前端只保证 **曝光/转化事件成对**。
- **治理**：实验需 **审核发布**、流量灰度、一键关实验回默认；禁止在未告知下改安全/合规 prompt。

**一句话**：实验中心配置变体与分流，前端 SDK 注入模型参数/Prompt/UI，请求带实验标签，指标回流做 variant 对比与灰度发布。

---

## 10. 在AI多轮对话中，如何设计上下文窗口的关键信息提取、自动摘要，锚点定位？

**思路**：分层记忆 = 近期原文 + 摘要 + 结构化锚点，按需组装 prompt。

- **窗口策略**：固定 **滑动窗口** 保留最近 N 轮；超出后 **异步摘要** 旧对话（background job），摘要进 `summary` 槽位，原文归档可检索不全量进 prompt。
- **关键信息提取**：每轮结束用轻量规则/小模型抽 **实体、决策、约束、待办**（JSON 结构化 memory）；与 RAG 知识库分离，存 **Session Memory Store**（IndexedDB + 服务端同步）。
- **自动摘要**：触发条件：Token 超阈值 / 轮次 > K / 话题切换检测；摘要模板保留 **目标、结论、未解决问题**；支持 **增量摘要**（新摘要 + 旧摘要合并）防信息丢失。
- **锚点定位**：每条消息 `messageId + 序号 + 时间戳`；用户/UI 可 **@引用某条** 或 **@文档片段**，发送时展开为 `anchor: { id, quote }` 插入 messages；前端 **侧边大纲/时间线** 跳转，流式消息可折叠旧轮。
- **组装**：`system + summary + memory JSON + 锚点引用 + 最近 K 轮`；前端展示「上下文已压缩」提示，支持用户 **锁定某条不被摘要**。

**一句话**：近轮原文 + 增量摘要 + 结构化 memory，消息锚点可 @ 引用定位，超窗自动压缩并可视化管理。

---

## 11. 如何用DDD划分AI前端的核心领域与界限上下文？

**思路**：按 **业务语义与变更频率** 拆，AI 能力独立成域，UI 壳层薄。

| 限界上下文 | 核心职责 | 对外接口 |
|------------|----------|----------|
| **Conversation**（对话） | 会话/消息/线程、多轮状态、锚点与摘要 | `SessionId、Message` 聚合 |
| **Generation**（生成） | 调模型、流式、Tool Call、重试与取消 | `CompletionPort` 端口 |
| **Knowledge**（知识） | RAG、向量检索、文档分块与引用 | `RetrievalQuery → Chunks` |
| **Workflow**（工作流） | DAG 配置、运行实例、节点状态 | `WorkflowRun` 聚合 |
| **Plugin**（插件） | 模型/Tool 注册、权限、Manifest | `PluginHost` 防腐层 |
| **Safety**（安全） | 敏感词、审核、脱敏策略 | `ContentGuard.scan()` |
| **Experiment**（实验） | A/B 分流、variant、指标标签 | `ExperimentContext` |
| **Workbench**（工作台壳） | 布局、路由、鉴权、跨上下文编排 | 应用层，不含领域规则 |

- **上下文关系**：Conversation **依赖** Generation、Knowledge（下游）；Plugin 通过 **防腐层** 适配各厂商 API；Safety 作为 **共享内核/横切域** 嵌入发送链路。
- **分层**：每上下文内 **Domain（实体/领域服务）→ Application（用例）→ Infrastructure（Gateway/SDK）**；UI 只调 Application，不直连厂商。
- **原则**：「模型供应商差异」不进 Conversation 聚合；「Prompt 模板版本」属 Generation 或 Workflow，不散落 UI 组件。

**一句话**：按对话、生成、知识、工作流、插件、安全、实验拆限界上下文，Workbench 做编排，厂商差异用防腐层隔离。

---

## 12. 在大型AI应用中，如何用Zustand或ReduxToolkit管理多轮对话、生成任务、用户配置等复杂状态？

**思路**：按 DDD 切片 + 服务端状态分离，别用一个巨型 store。

- **状态分类**：**UI 态**（面板、选中 session）放 Zustand；**服务端态**（消息列表、生成流）用 **TanStack Query** 缓存 + 乐观更新；**持久配置**（模型、快捷键）Zustand + persist/localStorage。
- **Redux Toolkit 方案**：按域建 **slice** — `conversation`、`generation`、`settings`、`experiment`；`createAsyncThunk` 管发消息、拉历史；**generation** 单独维护 `{ taskId, status, streamBuffer, abortController }` Map，避免写进 messages 数组触发全量渲染。
- **Zustand 方案**：多 store 或 `slice pattern`（`useConversationStore`、`useGenerationStore`）；中间件 **subscribeWithSelector** 细粒度订阅；流式用 ** immer 补丁 append** 或 ref 缓冲 + 节流 flush 到 store。
- **关键实践**：会话切换 **取消 in-flight** 请求；消息 **normalize**（`byId + ids`）；Tool Call / 多任务并行用 **task 维度** 状态，不与会话 message 混表；跨 slice 用 **事件/ listener middleware** 解耦（如「生成完成 → 刷新 token 统计」）。
- **选型**：团队要 DevTools、时间旅行、严格单向流 → **RTK**；子应用多、要轻量 → **Zustand 分 store**；二者都可与 Query 并存。

**一句话**：按对话/生成/配置分 slice 或分 store，流式与异步任务独立 Map，消息 normalize，服务端数据 Query 管，RTK 重规范、Zustand 重轻量。

---

## 13. 设计一个状态快照系统，支持将AI对话的完整状态进行序列号保存与恢复，还有一键分享，截图等

**思路**：快照 = 可版本化的不可变文档，敏感信息剥离，分享与本地分离。

- **快照模型**：`Snapshot { id, version, schemaVersion, createdAt, payload, checksum }`；payload 含 **messages、summary、memory、modelConfig、UI 状态（折叠/选区）**；大附件存 **blob 引用** 不内联 base64。
- **序列化**：JSON + **结构化 clone**；不可序列化对象（AbortController、Map）进 **白名单转换层**；`schemaVersion` 迁移函数兼容旧快照；gzip 压缩后存 **IndexedDB / 服务端**。
- **保存与恢复**：手动「存快照」+ **自动 checkpoint**（每 N 轮/生成结束）；恢复时 **fork 新 sessionId**，不覆盖原会话；冲突检测 checksum；恢复前预览 diff。
- **一键分享**：生成 **分享 token** → 服务端存脱敏快照（API Key、PII 已 redact）；短链 + **只读页**；可选过期时间与密码；本地快照 **禁止默认公开**。
- **截图**：**html2canvas / dom-to-image** 截对话区；长对话 **虚拟滚动分段拼** 或仅当前视口；水印 `snapshotId + 时间`；与快照 metadata 关联便于溯源。
- **安全**：分享前 **敏感扫描**；用户可选隐藏引用来源；撤销分享即废 token。

**一句话**：版本化快照 JSON 存 messages+memory+配置，IndexedDB/云端双写，分享走脱敏服务端只读链，截图关联 snapshotId 可溯源。

---

## 14. 在微前端架构下，多个AI功能模块需要共享当前模型版本，你会如何设计跨应用状态同步方案？

**思路**：Shell 持源 + 只读订阅，避免子应用互改乱套。

- **单一数据源**：**Shell Global Store**（Zustand/轻量 RTK）持有 `modelProfile { id, version, params }`；子应用 **禁止各自 persist 模型选择**，只读消费。
- **同步通道**：**① props 注入**（mount 时 snapshot + subscribe）**② CustomEvent / typed EventBus**（`ai:model:changed`）**③ Shared Worker / BroadcastChannel**（同源多 Tab 一致）；Module Federation 可 **shared singleton store** 模块。
- **协议**：事件载荷 `{ modelId, version, params, updatedAt, source }`；子应用 `getModel()` + `onModelChange(cb)`，**写操作仅 Shell 设置页** 可 dispatch，Chat/Editor 只读或发起 **changeRequest** 由 Shell 审批。
- **持久化**：Shell 写 **localStorage + 服务端用户偏好 API**，启动 hydrate 后广播；版本冲突以 **服务端为准**，离线用本地缓存降级。
- **边界**：模型列表来自 **Plugin Registry**，与「当前选中」分离；子应用 unmount 取消订阅防泄漏；E2E 测试验证切换模型后各 remote 参数一致。

**一句话**：Shell 单例 Store 为源，子应用 props/EventBus 只读订阅，写集中 Shell，持久化 hydrate 后全应用广播。

---

## 15. 请设计一个乐观更新的策略，在用户发送AI请求后立即在UI中显示预期结果，再根据实际流式响应逐步修正。

**思路**：消息分 **optimistic / streaming / final** 三态，同一 `clientMessageId` 贯穿。

- **发送瞬间**：生成 `clientMessageId`，立即插入 **用户消息** + **助手占位消息**（状态 `pending`，UI 显示 skeleton/「思考中」）；可选 **乐观预览**（基于模板猜首句，或空占位 + 打字光标，不伪造事实内容以防幻觉误导）。
- **流式修正**：SSE chunk 到达 → 同 id **append delta** 到 `streamBuffer`，状态 `streaming`；UI 节流（rAF/50ms）flush，避免每 token 重渲染；首 chunk 到达时 **替换** skeleton 为真实文本。
- **完成/失败**：`done` 事件 → 状态 `final`，写入 normalize store，清 buffer；**Abort** → 标记 `cancelled`，保留已生成部分；错误 → `failed` + 重试按钮，**回滚乐观消息** 或保留用户消息仅删助手占位。
- **一致性**：请求带 `clientMessageId` 与服务端 `messageId` 对齐映射；切会话 **AbortController** 取消流；StrictMode 防双插入用 id 去重。
- **体验**：流式与乐观同一气泡无缝 morph，不新建第二条；支持「编辑后重发」整链替换 optimistic 分支。

**一句话**：clientMessageId 绑定占位消息，发送即插入 pending，流式 append 同条修正，final/error/cancel 三态收口，节流渲染防卡。

---

## 16. 参考Git，设计一个状态版本控制系统，支持AI对话历史的任意回退、分支创建与合并。

**思路**：DAG 存 **快照 commit**，非逐条 diff 消息；分支即指针。

- **模型**：`Commit { id, parentIds[], snapshot, message, author, ts }` 构成 DAG；`Branch { name, headCommitId }`；`main` 为默认线；每次发送/编辑/Accept AI 可 **自动 commit** 或用户手动保存点。
- **回退**：`checkout(commitId)` 加载该快照 **fork 会话视图**（只读预览）或 **hard reset** 将 branch head 指向历史（需确认丢后续）；revert 生成 **反向 commit** 保留历史不删 DAG。
- **分支**：从任意 commit **branch** → 新 Branch 指针；在分支上继续对话形成平行历史（如方案 A/B 探索）；UI **时间线/图** 展示节点。
- **合并**：两分支 head 对比 snapshot.messages；**三路合并** — 以 **merge-base** 为锚，自动合非冲突消息；同 message 编辑冲突标 **ConflictMarker**，UI 选手动/ours/theirs；合并结果为新 merge commit（`parentIds: [A, B]`）。
- **存储**：IndexedDB 存 commit 对象 + **内容寻址** blob；大快照 dedupe；分享仅 export 某分支 log。
- **AI 语义**：「从这条重新生成」= 新分支；合并时 **summary/memory 以较新或手动选** 为准。

**一句话**：Commit DAG + Branch 指针管理对话快照，checkout/revert 回退，分支探索多方案，merge commit 处理冲突，存储内容寻址 dedupe。

---

## 17. 如何用TS声明一个支持流式Chunk数据与错误处理的泛型接口，并兼容SEE、WebScoket等多种传输方式？当AI服务返回的数据结构包含递归引用时，如何用TS定义避免循环引用导致的类型爆炸？设计一个类型系统，用于前端对AI模型元数据的静态校验以及用于描述Ai执行过程中的状态流转，并实现类型安全的状态切换。当AI返回的字段可能因为模型版本不同而动态变化时，如何设计类型守卫与类型收缩的策略？

**（1）流式 Chunk 泛型 + 多传输兼容**

```typescript
type StreamEvent<T> =
  | { kind: 'chunk'; data: T }
  | { kind: 'error'; error: unknown; retryable?: boolean }
  | { kind: 'done'; meta?: Record<string, unknown> };

interface StreamTransport<T> {
  readonly events: AsyncIterable<StreamEvent<T>>;
  abort(reason?: string): void;
}
// SSE / WebSocket / fetch 各写 Adapter，统一 parse → StreamEvent<T>
```

**要点**：传输层只负责 **字节→事件**，业务 Chunk 类型由泛型 `T` 指定；错误与完成用 **可判别联合**，避免 throw 断流。

**（2）递归引用：避免类型爆炸**

- **ID 引用模式**：节点 `{ id, type, childrenIds: string[] }` + 侧表 `Record<id, Node>`，树逻辑在运行时组，TS 只声明 **一层 Node**，不无限嵌套 `children: Node[]` 递归类型。
- **或** `children?: JsonRef<Node>[]` 配合 **depth 计数泛型** `Node<D extends number>` 限制深度（如 D≤5）。
- 校验用 **Zod `z.lazy()`** / JSON Schema，运行时递归；TS 侧用 `unknown` + parse 收窄，不手写 10 层嵌套。

**（3）模型元数据校验 + AI 执行状态机**

```typescript
type ModelId = string & { readonly __brand: 'ModelId' };
interface ModelMeta { id: ModelId; maxTokens: number; modalities: ('text'|'vision')[] }

type GenState =
  | { status: 'idle' }
  | { status: 'streaming'; buffer: string }
  | { status: 'failed'; error: Error }
  | { status: 'done'; messageId: string };

type Event =
  | { type: 'START' } | { type: 'CHUNK'; delta: string }
  | { type: 'FAIL'; error: Error } | { type: 'FINISH'; id: string };

function transition(s: GenState, e: Event): GenState { /* 穷尽 switch，default never */ }
```

**要点**：`status` 作判别字段；`transition` 返回新状态对象，UI `switch(state.status)` 类型自动收窄。

**（4）模型版本动态字段：守卫与收缩**

- **版本字段**：响应带 `schemaVersion` / `model`；维护 `V1Schema | V2Schema` **按版本分 schema**，不用一个大 optional 对象。
- **Zod/Valibot runtime parse** → 失败走 `UnknownChunk` 兜底 UI。
- **自定义 type guard**：`function isToolCall(x: unknown): x is ToolCallV2` 内校验 `'tool_calls' in x && Array.isArray(...)`。
- **收缩策略**：先 `unknown` → parse → 联合；公共字段放 **BaseMessage**，扩展放 `extensions?: Record<string, unknown>`；访问扩展前 **guard + 版本 switch**。

**一句话**：流传输用 `StreamEvent<T>` 联合 + Adapter；递归用 ID 图或 lazy schema；状态用可判别联合 + transition；动态字段按版本分 schema + runtime parse 再收窄。

---

## 18. 设计一个流式进度估算组件，根据已接收的token数与模型速率，动态预测AI生成剩余时间。

**思路**：滑动窗口估速率 + 不确定度，UI 显示区间而非假精确。

- **采集**：流式累加 `receivedTokens`、首 token 时间 `t0`、当前 `t`；可选模型 metadata 的 `maxTokens` 或历史 **P95 输出长度** 作上限。
- **速率估计**：**EWMA / 最近 N 秒 token 数** 得 `tokensPerSec`（冷启动用该模型历史均值）；首包前显示「连接中…」不估剩余。
- **剩余时间**：`remaining ≈ (expectedTotal - received) / tokensPerSec`；`expectedTotal` 用 **动态估计**（已收比例 + 同类任务均值）；输出 **区间** `[low, high]`（速率方差放大）。
- **UI**：进度条 + 「约剩 8–12 秒」；速率骤降时 **重置窗口**；Stop 冻结；完成时日志回流校准均值。

**一句话**：EWMA 估 tokens/s，结合 expectedTotal 动态预测，UI 展示区间并随流式修正，冷启动与完成反馈校准。

---

## 19. 设计一个优先级调度的流式请求队列，允许用户中断低优先级生成以优先处理高优先级任务。

**思路**：有限并发槽 + 优先级队列，Abort 低优先生成。

- **模型**：任务 `{ id, priority, abortController, stream }`；**High（当前输入）> Normal > Background（摘要/预加载）**。
- **调度**：Scheduler 维护 `maxConcurrent`（常 1–2）；高优 **抢占** — 对低优 `abort()`，标 `preempted`；同优先级 FIFO，Background **idle 才跑**，**aging** 防饿死。
- **流式**：每任务独立状态机；抢占时 **保留已收 chunk** 标 incomplete；新任务立即占槽。
- **UX**：队列可视化；中断提示「已让位」；后端有 continuation id 才支持 Resume。

**一句话**：优先级队列 + 并发槽，高优 abort 低优流，独立 AbortController，idle 跑后台并 aging 防饿死。

---
