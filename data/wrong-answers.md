# 错题本（React）

> 只收录 **React 面试路线 / 苏格拉底练习** 中的错题。  
> **AI 在用户答错后自动追加**，无需用户提醒。每条尽量短。

---

## 错题目录

| 日期 | 主题 | 来源 |
|------|------|------|
| 2026-05-15 | 父更新时子组件是否 re-render | `materials/react-interview-roadmap.md` L2 |
| 2026-05-15 | `key={index}` 中间插入列表 | 同上 L2 |
| 2026-05-15 | 连续 `setN(n+1)` 后最终 n 是多少 | 同上 L2 |
| 2026-05-15 | `useEffect` vs `useLayoutEffect` 时机 | 同上 L3 |
| 2026-05-15 | 为什么 Hook 不能写在 `if` 里 | 同上 L3 |
| 2026-05-18 | `Suspense` 在懒加载里负责什么 | `materials/react-interview-roadmap.md` L4 |
| 2026-05-18 | Profiler 怎么用 / 滚动列表卡顿查什么 | 同上 L4 |
| 2026-05-18 | `memo` 包住带 `children` 的子组件仍会 re-render | 同上 L4 |
| 2026-05-18 | HOC 踩坑 / Render Props 思路 | `materials/react-interview-roadmap.md` L5 |
| 2026-05-18 | 错误边界 vs try/catch、捕不到哪些错 | 同上 L5 |
| 2026-05-18 | 复合组件子组件如何共享选中态 | 同上 L5 |
| 2026-05-19 | 合成事件委托挂在 document 还是 root | `materials/react-interview-roadmap.md` L6 |
| 2026-05-19 | `useTransition` 干啥 /  urgent vs transition | `materials/react-interview-roadmap.md` L7 |
| 2026-05-19 | React 18 `setTimeout` 里两次 setState 批几次渲染 | 同上 L7 |
| 2026-05-19 | 为啥要有 Fiber（相对栈递归） | `materials/react-interview-roadmap.md` L8 |
| 2026-05-19 | `current` 与 `workInProgress` 双树 | 同上 L8 |
| 2026-05-19 | SSR 水合 / Hydration mismatch | 同上 L8 |
| 2026-05-19 | StrictMode 开发环境 effect 跑两遍的目的 | 同上 L7/L8 |
| 2026-05-19 | `useEffect([])` + `setCount(count+1)` 定时器闭包 | 同上 L3 |
| 2026-05-19 | 函数式 setState 后 log 的 count 会不会涨 | 同上 L3 |

---

## 2026-05-19 · `setCount(c=>c+1)` 但 `console.log(count)` 会跟着涨吗？

**你的答案**：会跟着涨。

**正解**：**不会**，log 里 **一直还是 0**（闭包里的 `count` 没变）。界面会正常涨，因为 **函数式更新** 用的是 React 里最新 state，不依赖闭包里的 `count`。

**解析**：改 `setState` 写法救的是 **更新**；要 log 最新值需 `count` 进依赖，或在回调里用 ref 存最新 count。

**要点**：函数式 setState ≠ 闭包里的变量会变；log 仍看闭包捕获的值。

---

## 2026-05-19 · useEffect 空依赖 + setInterval，log 的 count 是多少？

**你的答案**：log 一直是 1；不涨，因为 effect 只执行一次拿不到外面 count。

**正解**：`console.log(count)` **一直是 0**（effect 首次执行时闭包里的 count）。界面一般会 **到 1 后卡住**：`setCount(count+1)` 等价于反复 `setCount(0+1)`，不是一直 0。根因是 **stale closure** + 应使用 `setCount(c => c + 1)` 或把 `count` 放进依赖。

**解析**：`[]` 只 mount 一次 effect，回调永远用首次的 count=0；函数式更新不依赖闭包里的旧 count。

**要点**：空依赖 effect 里用 state → 易闭包陷阱；修法：函数式 setState 或依赖写全。

---

## 2026-05-15 · 父更新，props 不变，子还会 render 吗？

**你的答案**：不会。props 没变，父的更新没影响到子。

**正解**：**会**。父 re-render 时，子函数组件默认也会再执行一遍，和 props 变没变无关。

**解析**：React 默认「父 render → 子跟着 render」。props 没变只意味着 Diff 后 DOM 可能不变，不等于子函数体不跑；要跳过需 `React.memo` 等。

**要点**：父 render 带子一起算；`memo` 才在 props 浅比较相等时跳过子渲染。

---

## 2026-05-15 · `key={index}`，中间插入一行会怎样？

**你的答案**：不知道。

**正解**：列表项有**本地状态**（输入框、勾选）时，中间插入会让**状态错位**——字跑到别的行、勾选跟错行。

**解析**：下标当 key 时，React 按 index 复用实例；插入后「第 0 项」仍是旧实例，数据挤位但状态没跟对行。

**要点**：用稳定唯一 `key`（如 `id`）；`key` 帮 React 认出行，不是给 Diff 装饰用的。

---

## 2026-05-15 · 连续 `setN(n+1)` 两次，点一次后 n 是多少？

**你的答案**：`console` 是 0，最终 n 也是 0；要函数式更新才会变。

**正解**：`console.log(n)` 是 **0**；渲染后 **n 是 1**（不是 0）。函数式更新连写两次才是 **2**。

**解析**：同一次事件里两次 `setN(n+1)` 共用闭包里的旧 `n`；React 18 会批处理，结果只 +1。`console` 在 commit 前，仍是旧值。

**要点**：要累加用 `setN(x => x + 1)`；区分「日志里的 n」和「提交后的 n」。

---

## 2026-05-15 · `useEffect` 和 `useLayoutEffect` 区别？

**你的答案**：不清楚；猜 `useLayoutEffect` 在渲染时先执行。

**正解**：都在 **Commit 之后**、**浏览器绘制之前/之后** 分工不同——`useLayoutEffect` **同步**、在 **paint 前**；`useEffect` **异步**、在 **paint 后**。

**解析**：测 DOM 尺寸、避免闪烁用 `useLayoutEffect`；拉接口、订阅等多数副作用用 `useEffect`。不是「render 阶段里先跑」，render 阶段不能乱改 DOM。

**要点**：记时间线：Render → Commit DOM → **LayoutEffect** → 绘制 → **Effect**。

---

## 2026-05-15 · 为什么不能在 `if` 里写 Hook？

**你的答案**：只知道要写在顶部，原因不清楚。

**正解**：React 靠 **每次 render 时 Hook 的调用顺序** 把 state/effect 和组件对应起来；`if` 会导致某次 render 少调/多调 Hook，顺序乱掉。

**解析**：Hooks 不是普通函数，不能条件调用。自定义 Hook 也要遵守同样规则。

**要点**：顶层、固定顺序；需要分支用 Hook 内部逻辑或拆子组件。

---

## 2026-05-18 · `Suspense` 在 `React.lazy` 懒加载里负责什么？

**你的答案**：不知道。

**正解**：`Suspense` 包住懒加载组件，在 **chunk 还没下载完** 时显示 **`fallback`**（loading）；下载完成后再渲染真实子组件。

**解析**：`lazy` 只负责「按需 `import()` 组件」；子组件第一次要渲染时会 **suspend**，由外层 `Suspense` 接住并展示占位，避免白屏或报错。

**要点**：`lazy` = 拆包 + 延迟加载；`Suspense` = 加载中的 UI；路由切换常见组合是 `lazy` + `Suspense` + `fallback`。

---

## 2026-05-18 · Profiler 怎么用？滚动 5000 行卡顿、子组件狂 render 查什么？

**你的答案**：没用过 Profiler；第二问不知道。

**正解**：DevTools → **Profiler** → 点录制 → 操作（如滚动）→ 停止；看 **哪次 commit 耗时最长**、**哪些组件 render/commit 次数多**。5000 行优先想 **列表虚拟化**；若单组件狂 render 且 props 没变，查 **父是否每次造新引用**、`memo` 是否被内联函数/对象/数组击穿、**Context value** 是否整包变。

**解析**：Profiler 是「先量再优化」；长列表瓶颈常在 DOM 数量，不是只包 `memo` 就能救。

**要点**：Profiler 看 commit 耗时与 render 火焰图；长列表 → 虚拟滚动；props 没变仍 render → 引用相等 / Context / 父级状态。

---

## 2026-05-18 · 包了 `memo` 的组件，只传 `children` 为何仍 re-render？

**你的答案**：不会 re-render；不太了解 `children` 是什么。

**正解**：**会** re-render。标签之间的 JSX 会变成 prop **`children`**；父每次 render 都会 **重新创建** 里面的元素（新引用），`memo` 浅比较 `children` 不相等 → 拦不住。

**解析**：`children` 和普通 prop 一样参与比较；要优化可把 `ExpensiveList` 提到父外、用 `useMemo` 包住 children、或状态/列表下放到更浅的子树。

**要点**：`children` = 写在组件标签之间的内容；`memo` 比较的是**所有 props（含 children）**；父 render 常让 children「每次都是新的」。

---

## 2026-05-18 · HOC 容易踩什么坑？Render Props 是什么思路？

**你的答案**：HOC 是函数包组件、加逻辑样式；踩坑不知道。Render Props 是组件接受函数返回 JSX；思路不知道。自定义 Hook 更清晰、组合灵活（对）。

**正解**：HOC 坑：**嵌套地狱**、**props 重名/被覆盖**、**ref 要 forwardRef**、DevTools 难读。Render Props：**用函数 prop（或 children 为函数）把内部 state/logic 交给调用方决定渲染什么**，例如 `<Mouse render={({x,y}) => ...} />`。

**解析**：三代复用：HOC 包一层组件 → Render Props 包一个函数 → Hook 直接抽逻辑，少一层 UI 嵌套。

**要点**：HOC 记 wrapper hell；Render Props = 「状态在提供者，UI 由函数决定」；Hook = 可组合、无额外组件树。

---

## 2026-05-18 · 错误边界 vs try/catch？捕不到 B/C/D？

**你的答案**：错误边界捕获错误；try/catch 只能捕同步和异步。错误边界捕 React 框架错误。捕不到选 **C、D**。

**正解**：错误边界在**子树 render / 生命周期 / 子组件 constructor** 抛错时展示降级 UI。捕不到：**B 事件处理函数**、**C effect/异步未处理**、**D 边界自身**。**A render 里 throw 能捕**。事件里要用 try/catch；异步要 `.catch` / `try await`。

**解析**：边界管的是 **React 渲染路径**上的错，不是「所有 React 相关错」。try/catch 管的是 **命令式 JS**（含事件、自己包住的 async）。

**要点**：能捕 = 子组件 render/生命周期/constructor；不能 = 事件、未处理 Promise、SSR、边界自己；类组件 + `getDerivedStateFromError` / `componentDidCatch`。

---

## 2026-05-18 · 复合组件里 `Tab` 怎么知道选中态？靠什么共享？

**你的答案**：通过 props 来共享。

**正解**：由 **根组件（如 `Tabs`）在内部用 Context** 提供 `value` / `onChange` / `selected`，`Tab`、`Panel` 用 `useContext` 读取；**调用方不必**手动给每个子组件传一堆 props。

**解析**：对外是「声明式拼 JSX」；对内是「私有 Context + 若干子组件挂到父上」。不是 props drilling。

**要点**：复合组件 = 灵活 JSX API + 内部 Context 隐式共享；与「一个大 `items` 配置」对比：可组合、可插槽、结构清晰。

---

## 2026-05-19 · 合成事件委托挂在哪？

**你的答案**：挂在 document 根节点；委托为了减少内存、更新组件不用重新绑定。

**正解**：**React 17+** 挂在 **`ReactDOM.createRoot` 的那个根容器**上（不是 document）；**React 16 及以前** 才是 document。委托目的一样：少绑 listener、动态列表省心。

**解析**：面试要分版本答；内存与「不必每个节点绑一份」仍成立。

**要点**：17+ → root 容器；16- → document；委托 = 集中监听 + 按 target 分发。

---

## 2026-05-19 · `useTransition` 是什么？为啥输入立刻更新、过滤放 transition？

**你的答案**：不太了解这个 Hook，是自带的吗？过滤放里面防卡顿；`isPending` 标记加载中。

**正解**：**React 18 内置** `useTransition`。把更新分成 **紧急**（输入框 `keyword`，要立即响应）和 **过渡**（重列表 `filtered`，可被打断、低优先级）。`startTransition` 包的重渲染不会堵住打字；`isPending` 为 true 时可显示列表区 loading/骨架。

**解析**：不是「魔法防抖」，是 **并发渲染下的优先级**；输入永远优先，慢的过滤让路。

**要点**：自带 Hook；紧急 vs 过渡；`isPending` → 过渡区 UI 反馈；场景 = 搜索、Tab 切换大面板。

---

## 2026-05-19 · React 18 `setTimeout` 里连续两次 setState 几次渲染？

**你的答案**：2 次。

**正解**：**React 18 + `createRoot`** 下 **1 次**（自动批处理）。**React 17** 在 `setTimeout`/Promise 里 **不批**，才是 **2 次**。

**解析**：18 把批处理扩大到 **事件、setTimeout、原生 Promise、自定义 hook 里** 等；17 主要只在 **React 合成事件处理器** 里批。

**要点**：18 → 异步里也多路 setState 合并一次 commit；17 → 只有 React 事件里合并。

---

## 2026-05-19 · 为啥要有 Fiber？栈递归 reconciler 的问题？

**你的答案**：递归整棵树，性能不行、耗时间。

**正解**：栈协调 **同步、一口气递归到底**，长任务 **占满主线程**，不能暂停 → 卡顿。Fiber 把更新拆成 **小单元**，可 **中断/恢复**，配合 **优先级**（输入优先于大列表），支撑 **并发特性**。

**解析**：不单是「慢」，是 **无法调度**；Fiber 是链表工作单元 + 时间切片，让浏览器能先响应高优任务。

**要点**：栈 = 不可中断；Fiber = 可中断 + 优先级 + 为 18 并发铺路。

---

## 2026-05-19 · `current` 与 `workInProgress` 双树各是啥？

**你的答案**：完全不了解。

**正解**：**`current`** = 屏幕上**正在显示**的那一版 Fiber 树。**`workInProgress`（WIP）** = 本次更新在 **Render 阶段** 上改的那棵「草稿树」。**Commit 成功** 后，WIP **变成** 新的 `current`，旧 current 可复用为下次 WIP（双缓冲互换）。

**解析**：边画边算草稿，没 commit 前用户仍看旧版；commit 后一次性换屏，避免算到一半 DOM 半吊子。

**要点**：current = 现网；WIP = 草稿；Render 改 WIP；Commit 后 WIP → current。

---

## 2026-05-19 · SSR 水合是啥？Hydration mismatch 常见原因？

**你的答案**：都不太理解，没用过 SSR。

**正解**：水合 = 客户端 **不重建空 DOM**，而是 **复用服务端 HTML**，把 Fiber/事件绑上去，并对齐首屏 VDOM。**CSR** 是空容器从头 `render`。Mismatch 常见：**服务端与客户端渲染结果不一致**（`Date.now()`、`window`、`Math.random()`、HTML 嵌套不合法、扩展改 DOM）。

**解析**：先记概念即可；做 Next.js 时再碰。面试一句：水合 = attach + 一致性校验。

**要点**：水合 ≠ 首次画 DOM；忌两端不一致；CSR 从空 mount。

---

## 2026-05-19 · StrictMode 里 effect 为啥开发环境跑两遍？

**你的答案**：生产不会两遍（对）；目的不清楚。

**正解**：**仅开发环境**。React **故意**「挂载 → 清理 → 再挂载」模拟一次卸载，逼你检查 **`useEffect` 的 cleanup** 是否写对（取消订阅、清定时器），避免内存泄漏；并为未来 **可恢复/严格** 行为铺路。

**解析**：不是 bug；生产只 mount 一次。看到双 log 先查 cleanup，别在 effect 里写无清理的副作用。

**要点**：dev 双调用；测 cleanup；prod 正常一遍。

---

<!-- 新错题：复制上一段「## 日期 · 主题」四行块（你的答案 / 正解 / 解析 / 要点），并更新目录表 -->
