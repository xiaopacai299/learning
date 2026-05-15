# 练功房

平时写小实验、跟 `materials/` 教材同步动手的地方。仓库其它部分仍以笔记与进度为主，这里随便改、不追求「成品项目」。

## 目录

| 路径 | 用途 |
|------|------|
| `html-css/` | 布局、样式、纯静态页；用浏览器直接打开 `.html` 即可。 |
| `typescript/` | `.ts` 练习稿；需要类型检查见下文。 |

## TypeScript 怎么跑检查（可选）

在 `练功房` 目录执行：

```powershell
npm install
npm run typecheck
```

不装依赖时，也可把 `typescript/src` 里的文件复制到 [TypeScript Playground](https://www.typescriptlang.org/play) 里练。

## 和主学习流配合

- 教材：`materials/`  
- 记进度：`data/progress.json`  
- 扫关键词：`.\scripts\scan-learn.ps1 -Keyword "关键词"`
