# 乾坤

## 1. 乾坤的原理

微前端加载器 + 沙箱 + 生命周期管理

微前端加载器：负责加载它下面的子应用。

沙箱：负责隔离子应用的运行环境。
（1）js 全局变量的隔离。
qiankunWindoe = window.proxy || window
（2）副作用泄露
子应用在 mount 阶段会执行宏任务等副作用，需要在 unmount 阶段清理。
（3）动态插入 script,style,link
（4）样式隔离

生命周期管理：负责子应用的加载、卸载、更新等生命周期管理。

## 2. 乾坤的功能

1.注册各个子路由

```main.js
registerMicroApps(
  [
    {
      name: 'chat-vue2', // 子应用的名称
      entry: '//localhost:7101', // 子应用的入口
      container: '#subapp-container', // 子应用所在的位置
      activeRule: '#/chat', // 子应用对应的路由
      props: shellProps, // 塞给子路由的数据和方法
    }
  ]
}
然后start()
```

2.ui 上：shell 基座负责提供 layout 公共结构，在index.html中实现的，子应用挂载到这个文件的特定元素下面 

3.通信：子应用和 shell 基座之间的通信
（1）方式一
```shell
/** 注入给所有子应用的 props（引用稳定） */
const shellProps = {
  globalStore,
  eventBus,
  aiClient,
  user: { name: '演示用户', id: 'u_demo' },
};
```
```子应用
instance = new Vue({
  render: (h) => h(App, { props: { shellProps: props } }),
}).$mount(mountEl);
```
子应用之间，子应用和shell之间都是通过发布订阅模式进行通信的。

# ai应用流程

## 1.流程

用户操作（Chat / Editor / Viz 任一子应用）
        │
        ▼
   前端 ai-sdk（统一调用方式）
        │  带上：modelId、TraceId、prompt…
        ▼
   AI Gateway（你们自己的后端 / BFF）
        │  鉴权、限流、选模型、藏 Key
        ▼
   OpenAI / Claude / 自建模型…（厂商 API）
        │
        ▼
   SSE 流式响应 ← Gateway 转发 ← ai-sdk 解析 ← 子应用 UI 逐字显示

AI Gateway：专门对接ai的后端中间层（BFF）
产生的原因：
（1）如果模型的apikey保留在浏览器，不够安全，只能存在服务端
（2）统一管理模型调用，避免各写一套。
（3）鉴权、配额 ，在这里进行限流，计费
（4）日志
（5）代理sse，前端只认代理后的格式
职责：
（1）代理请求，收前端格式，转成厂商格式请求
（2）流式转发，将厂商产生的token，转发给前端。
