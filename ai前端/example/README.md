# qiankun 微前端 AI 工作台 Demo

**Shell 主应用** + 三个 **异构子应用**（Vue 2 / Vue 3 / React），对照 `ai.md` 第 1 题理解架构。

| 应用 | 框架 | 端口 | qiankun name |
|------|------|------|----------------|
| Shell | 原生 JS + qiankun | **7100** | — |
| Chat | **Vue 2** | 7101 | `chat-vue2` |
| Editor | **Vue 3** | 7102 | `editor-vue3` |
| Viz | **React 18** | 7103 | `viz-react` |

## 安装与运行

```bash
cd ai前端/example
npm run install:all
npm run dev
```

会 **同时启动 4 个 dev server**。浏览器只打开 **http://localhost:7100**（Shell），子应用由 qiankun 按 hash 路由加载。

> 首次请先等 7101–7103 都起来后再切路由，否则可能加载失败；刷新即可。

**React 子应用若报 `@react-refresh` 错误**：已去掉 `@vitejs/plugin-react`，改用 esbuild 编译 JSX；Shell 会过滤 Vite 开发脚本。改完后请 **重启** `npm run dev`。

## 怎么玩

| 操作 | 说明 |
|------|------|
| 点击 **#/chat / #/editor / #/viz** | qiankun 卸载旧子应用、加载对应 entry |
| 改 **当前模型** | Shell `globalStore` + EventBus |
| Chat **切换会话** | `ai:session:changed` → Editor/Viz 收到 |
| Editor **发选区** | `editor:selection` → Chat 显示 |
| Chat **发送** | Shell 注入的 `aiClient` 模拟流式 |
| 左侧 **EventBus 日志** | Shell 统一打印 |

## 目录

```text
packages/shell/        主应用 registerMicroApps + start
packages/chat-vue2/    Vue 2 + vite-plugin-qiankun
packages/editor-vue3/  Vue 3 + vite-plugin-qiankun
packages/viz-react/    React + vite-plugin-qiankun
```

## 子应用生命周期（qiankun 标准）

每个子应用 `src/main.js` 导出：

- `bootstrap()` — 初始化
- `mount(props)` — Shell 传入 `container、globalStore、eventBus、aiClient…`
- `unmount()` — 销毁实例、清空 DOM

独立调试：可单独 `npm run dev --prefix packages/chat-vue2` 访问对应端口。
