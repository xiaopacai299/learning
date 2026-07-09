# Node.js 面试学习路线（简 → 难 → 大厂）

> **适用**：有前端基础、写过接口或脚本，但 **Event Loop / Stream / 后端工程化** 不系统。  
> **目标**：覆盖国内一线大厂 **Node / 全栈 / 前端偏后端** 面试高频考点，能「答概念 + 讲边界 + 举场景」。  
> **配合**：苏格拉底式对话由小语在 Chat 中推进；动手题可落在 `练功房/node/`（可按需新建）。  
> **与 React 路线关系**：React 路线 **暂停续学**，进度见 `data/progress.json` 与本文 **附录 D**。

---

## 如何使用本文档

1. **按阶段顺序学**，L1～L2（模块 + 事件循环）是分水岭，勿跳过。  
2. 每阶段先 **自答「面试题清单」**，再对照 **要点与易错点**；答不上可记入 `data/material-suggestions.md`。  
3. 在 Chat 中说：`接着 Node 路线 Lx` 或 `Node 第 x 阶段`，小语会从该阶段提问。  
4. 题目标记：**⭐** 一面常见 · **⭐⭐** 一面深挖 / 二面 · **⭐⭐⭐** 原理 / 系统设计向。  
5. **错题**：答错后自动记入 `data/wrong-answers-node.md`（与 React 错题本分开）。

**建议周节奏（可按自己调整）**

| 周 | 阶段 | 重心 |
|----|------|------|
| 1 | L1～L2 | 模块机制、Event Loop、异步模型 |
| 2 | L3 | Buffer、Stream、文件与网络 IO |
| 3 | L4 | HTTP、Express/Koa、中间件、REST |
| 4 | L5 | 鉴权、安全、参数校验 |
| 5 | L6 | MySQL、Redis、缓存与一致性 |
| 6 | L7 | 性能、集群、内存、可观测性 |
| 7 | L8 | 架构、消息队列、部署名词、综合题 |

**当前建议起点**：**L1**（从模块与 Node 定位开练）。

---

## L0 · 学习前定位

- 前端面试者补 **Node 后端面**，或全栈岗 **笔试 + 一面后端基础**。  
- 若 `learner-profile.json` 中 **engineering** 偏低：L4 起需配合小项目（接口 + DB）加深。  
- **不要求** 先精通 K8s / 微服务源码；L8 以 **名词 + 场景 + 权衡** 为主。

---

## L1 · 基础与模块（简单 · 必扎实）

**目标**：说清 Node 是什么、与浏览器的差异、模块怎么加载。

### 1.1 核心概念

- Node 定位：**V8 + libuv**，JS 运行时，擅长 **IO 密集** 而非 CPU 密集（CPU 密集需 Worker / 队列 / 多进程）。  
- 与浏览器差异：**无 DOM/BOM**，有 `process`、`Buffer`、`fs`、`http` 等模块。  
- **CommonJS**（`require` / `module.exports`）与 **ESM**（`import` / `export`）差异与互操作（知道 `type: module`、`createRequire` 即可）。  
- **npm / pnpm / yarn** 职责；`package.json` 中 `dependencies` vs `devDependencies`；语义化版本 `^` `~`。  
- **全局对象**：`global` / `globalThis`，**没有** `window`；`__dirname` / `__filename`（CJS）与 ESM 中获取路径方式。

### 1.2 面试题清单

| 题 | 难度 |
|----|------|
| Node.js 是什么？适合什么场景？ | ⭐ |
| Node 与浏览器运行环境的主要区别 | ⭐ |
| CommonJS 和 ESM 的区别？如何混用？ | ⭐⭐ |
| `require` 的加载过程（概括：缓存、路径解析） | ⭐⭐ |
| npm 脚本、`npx`、lockfile 是干什么的 | ⭐ |
| 什么是单线程？Node 如何处理并发？ | ⭐⭐ |

### 1.3 易错点

- 说「Node 是多线程」却不提 **主线程执行 JS + libuv 线程池处理部分 IO**。  
- 把 Node 适合 **高 CPU 计算** 说成强项（应讲 **事件驱动、非阻塞 IO**）。

---

## L2 · 异步与 Event Loop（简单+ · **面试最高频**）

**目标**：能画 **宏任务 / 微任务** 顺序，讲清 `process.nextTick`、`setImmediate` 与浏览器差异。

### 2.1 核心概念

- **调用栈、任务队列、Event Loop**（libuv 阶段：timers → pending → idle → poll → check → close）。  
- **宏任务**：`setTimeout` / `setInterval` / `setImmediate` / I/O 回调等。  
- **微任务**：`Promise.then` / `queueMicrotask`；Node 中 **`process.nextTick`** 优先级 **高于** Promise 微任务。  
- **异步写法演进**：callback → Promise → async/await；错误处理 `try/catch` + `.catch`。  
- **并发 vs 并行**：单线程事件循环 + 多线程池（libuv）分工。

### 2.2 面试题清单

| 题 | 难度 |
|----|------|
| 描述 Node 的 Event Loop（简版 30 秒 + 详版） | ⭐⭐ |
| 输出题：`setTimeout` / `Promise` / `process.nextTick` 顺序 | ⭐⭐ |
| `setImmediate` vs `setTimeout(0)` 区别 | ⭐⭐ |
| 什么是阻塞？如何避免阻塞 Event Loop？ | ⭐⭐ |
| `async/await` 本质与错误处理最佳实践 | ⭐⭐ |
| Node 11+ 以后 `process.nextTick` 与微任务和浏览器的差异 | ⭐⭐⭐ |

### 2.3 易错点

- 与 **浏览器 Event Loop** 混为一谈（Node 有 **多阶段** 与 `nextTick`）。  
- 在主线程做 **大循环、同步压缩、大 JSON.parse** 导致全站卡顿。

---

## L3 · Buffer、Stream 与文件 IO（中等）

**目标**：理解 **流式处理** 与背压，能解释为何上传/下载要用 Stream。

### 3.1 核心概念

- **Buffer**：二进制数据、与 `string` 编码（utf8、base64）。  
- **Stream 类型**：Readable、Writable、Duplex、Transform。  
- **pipe、背压（backpressure）**、`highWaterMark`。  
- **fs**：同步 vs 异步 API；`createReadStream` / `createWriteStream` 大文件拷贝。  
- **path**：`path.join` / `path.resolve` 跨平台路径。

### 3.2 面试题清单

| 题 | 难度 |
|----|------|
| Buffer 是什么？和 Array 的区别 | ⭐ |
| 什么是 Stream？为什么处理大文件要用 Stream？ | ⭐⭐ |
| 什么是背压？如何处理 | ⭐⭐ |
| 如何实现一个文件拷贝（Stream 版 vs 读入内存版） | ⭐⭐ |
| `pipeline` 与 `pipe` 的区别（错误处理） | ⭐⭐ |

### 3.3 易错点

- 把整个大文件 **一次性 readFile** 进内存导致 OOM。  
- 忽略 Stream 的 **`error` 事件** 与 `pipeline` 统一错误处理。

---

## L4 · HTTP 与 Web 框架（中等 · 项目面核心）

**目标**：能设计 **RESTful API**、讲清 **中间件** 与请求生命周期。

### 4.1 核心概念

- **HTTP 基础**：方法、状态码、无状态、Keep-Alive、HTTP/2 名词。  
- **Express**：路由、中间件洋葱模型、`req` / `res`、错误处理中间件（四参数）。  
- **Koa**：`context`、`await next()` 洋葱模型、与 Express 对比。  
- **RESTful** 设计：资源、动词、幂等性（GET/PUT/DELETE vs POST）。  
- **body 解析**：`json` / `urlencoded` / 文件上传（`multer` 知道即可）。  
- **跨域 CORS**：简单请求、预检 OPTIONS、凭证 `credentials`。

### 4.2 面试题清单

| 题 | 难度 |
|----|------|
| GET 和 POST 区别；什么是幂等 | ⭐ |
| 中间件是什么？Express 执行顺序 | ⭐⭐ |
| Koa 和 Express 的区别 | ⭐⭐ |
| 如何设计一个 RESTful 用户 API | ⭐⭐ |
| 全局错误处理、404 如何处理 | ⭐⭐ |
| 如何实现接口限流（概念：令牌桶 / 滑动窗口） | ⭐⭐ |

### 4.3 易错点

- 业务错误一律 **500**（应区分 4xx 客户端 / 5xx 服务端）。  
- 中间件里 **忘记 `return next()`** 或 async 错误未 `catch` 导致挂起。

---

## L5 · 鉴权、安全与校验（中等+）

**目标**：讲清 **Session / JWT / Cookie** 取舍与常见安全题。

### 5.1 核心概念

- **Cookie**：`HttpOnly`、`Secure`、`SameSite`、过期。  
- **Session + Cookie** vs **JWT**（状态在服务端 vs 无状态、吊销、体积）。  
- **密码**：bcrypt 加盐哈希，**不明文**存储。  
- **HTTPS**、CSRF、XSS（与 Node 模板/接口的关系）、SQL 注入（参数化查询）。  
- **参数校验**：joi / zod / class-validator（知道职责即可）。

### 5.2 面试题清单

| 题 | 难度 |
|----|------|
| Cookie、Session、Token（JWT）区别与选型 | ⭐⭐ |
| JWT 结构；access / refresh 双 token | ⭐⭐ |
| 如何防止 CSRF、XSS（后端能做什么） | ⭐⭐ |
| 接口鉴权中间件怎么写（Bearer） | ⭐⭐ |
| 敏感配置如何用环境变量 / `.env` | ⭐ |

### 5.3 易错点

- JWT 放 **localStorage** 忽略 XSS 风险（面试要提权衡）。  
- **SECRET** 提交进 Git。

---

## L6 · 数据库与缓存（中等+ · 大厂必问）

**目标**：MySQL + Redis  **会用会讲**，知道 **缓存一致性** 常见方案。

### 6.1 核心概念

- **MySQL**：索引（B+ 树名词）、联合索引、最左前缀、事务 ACID、隔离级别（读未提交～可串行化）、慢查询。  
- **Redis**：数据结构（string/hash/list/set/zset）、过期策略、持久化 RDB/AOF 名词。  
- **缓存模式**：Cache Aside（旁路）、穿透/击穿/雪崩与应对。  
- **ORM**：Prisma / TypeORM / Sequelize（知道解决什么即可）。  
- **连接池**、N+1 查询问题（概念）。

### 6.2 面试题清单

| 题 | 难度 |
|----|------|
| 索引为什么能加快查询？什么字段不适合建索引 | ⭐⭐ |
| 事务隔离级别分别解决什么问题 | ⭐⭐ |
| Redis 为什么快？用在哪些场景 | ⭐⭐ |
| 缓存穿透、击穿、雪崩区别与方案 | ⭐⭐⭐ |
| 先更新 DB 还是先删缓存？为什么 | ⭐⭐⭐ |
| 如何用 Redis 实现分布式锁（概念 + 坑） | ⭐⭐ |

### 6.3 易错点

- 把 Redis 当 **唯一数据源** 却不考虑持久化与集群。  
- **缓存双写** 不一致没有策略。

---

## L7 · 性能、集群与可观测性（难）

**目标**：知道 **PM2/cluster**、内存泄漏排查、日志与监控名词。

### 7.1 核心概念

- **cluster 模块**：多进程利用多核；主进程分发连接。  
- **Worker Threads**：CPU 密集任务 offload。  
- **内存**：V8 堆、老生代/新生代名词；泄漏常见原因（全局变量、闭包、未清定时器）。  
- **性能**：`clinic` / 火焰图名词；压测 `autocannon` 知道即可。  
- **日志**：pino / winston；**结构化日志**；请求 traceId。  
- **健康检查** `/health`、优雅退出 `SIGTERM`。

### 7.2 面试题清单

| 题 | 难度 |
|----|------|
| Node 如何做集群？单线程为何还要 cluster | ⭐⭐ |
| 如何排查内存泄漏 | ⭐⭐ |
| CPU 100% 如何定位 | ⭐⭐ |
| 什么是优雅关闭 | ⭐⭐ |
| 限流、熔断、降级（概念） | ⭐⭐⭐ |

---

## L8 · 架构与工程化（难 · 二面 / 全栈向）

**目标**：**消息队列、微服务、部署** 能讲场景与权衡，不背源码。

### 8.1 核心概念

- **分层**：Controller / Service / Repository。  
- **消息队列**：RabbitMQ / Kafka 使用场景（削峰、解耦、异步）。  
- **微服务**：拆分边界、服务发现、配置中心（名词）。  
- **Docker**：镜像、容器、与虚拟机区别；**Node 镜像** 多阶段构建名词。  
- **CI/CD**、灰度、蓝绿发布（概念）。  
- **TypeScript + Node**：类型安全、装饰器（了解）。  
- **测试**：单元（Jest）、接口测试（supertest）。

### 8.2 面试题清单

| 题 | 难度 |
|----|------|
| 如何设计一个高并发秒杀系统（Node 角色） | ⭐⭐⭐ |
| 单体 vs 微服务优缺点 | ⭐⭐ |
| 消息队列如何保证消息不丢（概览） | ⭐⭐⭐ |
| 日志采集与监控（ELK、Prometheus 名词） | ⭐⭐ |
| 描述一次 HTTP 请求进来到响应的全链路 | ⭐⭐⭐ |

### 8.3 易错点

- 微服务 **为拆而拆**，忽略分布式事务复杂度。  
- 面试只背名词 **说不出 Node 在链路里干什么**。

---

## 附录 A · 大厂常考综合题（冲刺用）

- 设计 **短链服务**（302、缓存、防刷、限流）。  
- 设计 **文件上传**（分片、断点续传、Stream）。  
- 设计 **即时通讯** 长连接（WebSocket、心跳、扩容概念）。  
- 从 0 描述：**浏览器输入 URL → Node 接口 → DB → 返回 JSON** 全链路。  
- 线上 **接口变慢** 排查思路（CPU / 内存 / DB / 下游 / 锁）。

---

## 附录 B · 推荐学习顺序

```text
L1 模块与定位 → L2 Event Loop（重点）→ L3 Stream
→ L4 HTTP/框架 → L5 安全鉴权 → L6 DB/Redis
→ L7 性能集群 → L8 架构综合
```

**当前建议起点**：**L1**（Chat 中说 `接着 Node 路线 L1`）。

---

## 附录 C · 与前端知识的衔接

| 前端已有 | Node 延伸 |
|----------|-----------|
| Promise、async | Event Loop 顺序题 |
| HTTP 调接口 | 服务端路由、中间件、状态码设计 |
| Cookie 登录 | Session/JWT、安全属性 |
| 性能优化 | 缓存、集群、Stream 省内存 |

---

## 附录 D · React 路线进度快照（2026-05-19 暂停）

> 下次续 React：`接着 React 路线` + 见 `data/progress.json` 中 `react` 字段。

| 阶段 | 状态 | 说明 |
|------|------|------|
| L1 | ⬜ 未系统测 | 建议快扫：VDOM、受控组件、`useState(()=>)` |
| L2 | 🟡 练过 | 父/子 render、key、批处理；**复习错题** |
| L3 | 🟡 练过 | Effect、Hook 规则；**闭包/依赖/自定义 Hook 待深化** |
| L4 | 🟢 主干完成 | memo、Context、lazy/Suspense；虚拟列表未练 |
| L5 | 🟢 主干完成 | 通信、错误边界、复合组件 |
| L6 | 🟡 用法 OK | 合成事件；实现原理可和 L8 合并 |
| L7 | 🟡 部分 | transition、批处理；`useDeferredValue`/RSC 未讲 |
| L8 | 🟡 入门 | Fiber、双树、StrictMode、选型；**全链路/手写 useState/SSR 未练** |
| 附录 A | ⬜ 未开始 | 无限滚动、权限组件、大表单等场景题 |

**错题本**：`data/wrong-answers.md`（约 20 条，优先复习 05-15 L2/L3 与 05-18/19）。

**建议续学三条**：① 错题本 ② L3 深化 ③ 附录 A「点按钮到上屏」全链路。
