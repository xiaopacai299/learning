import { registerMicroApps, start } from 'qiankun';
import { createEventBus } from './shared/event-bus.js';
import { createGlobalStore } from './shared/global-store.js';
import { createAIClient } from './shared/ai-client.js';

const eventLogEl = document.getElementById('event-log');
const modelSelect = document.getElementById('model-select');
const traceEl = document.getElementById('trace-id');

let traceId = `tr_${Math.random().toString(36).slice(2, 10)}`;
traceEl.textContent = `TraceId: ${traceId}`;

const globalStore = createGlobalStore({ modelId: modelSelect.value });
const eventBus = createEventBus(({ type, payload, time }) => {
  const li = document.createElement('li');
  li.textContent = `[${time}] ${type} ${JSON.stringify(payload)}`;
  eventLogEl.prepend(li);
  while (eventLogEl.children.length > 12) eventLogEl.lastChild.remove();
});

const aiClient = createAIClient(() => ({
  modelId: globalStore.getState().modelId,
  traceId,
}));

/** 注入给所有子应用的 props（引用稳定） */
const shellProps = {
  globalStore,
  eventBus,
  aiClient,
  user: { name: '演示用户', id: 'u_demo' },
};

registerMicroApps(
  [
    {
      name: 'chat-vue2', // 子应用的名称
      entry: '//localhost:7101', // 子应用的入口
      container: '#subapp-container', // 子应用所在的位置
      activeRule: '#/chat', // 子应用对应的路由
      props: shellProps, // 塞给子路由的数据和方法
    },
    {
      name: 'editor-vue3',
      entry: '//localhost:7102',
      container: '#subapp-container',
      activeRule: '#/editor',
      props: shellProps,
    },
    {
      name: 'viz-react',
      entry: '//localhost:7103',
      container: '#subapp-container',
      activeRule: '#/viz',
      props: shellProps,
    },
  ],
  {
    beforeLoad: [(app) => console.log('[qiankun] beforeLoad', app.name)],
    beforeMount: [(app) => console.log('[qiankun] beforeMount', app.name)],
    afterUnmount: [(app) => console.log('[qiankun] afterUnmount', app.name)],
  }
);

start({
  sandbox: { experimentalStyleIsolation: true }, // 样式隔离
  prefetch: false, // 预加载
  /** 跳过 Vite 开发期脚本，避免 import-html-entry 执行 @react-refresh / @vite/client 报错 */
  excludeAssetFilter: (url) =>
    ['@react-refresh', '@vite/client', 'vite/dist/client'].some((k) => url.includes(k)),
});

modelSelect.addEventListener('change', () => {
  globalStore.setModel(modelSelect.value);
  eventBus.emit('ai:model:changed', { modelId: modelSelect.value });
});

function syncNav() {
  const hash = location.hash || '#/chat';
  document.querySelectorAll('.nav-link').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
}

window.addEventListener('hashchange', syncNav);
if (!location.hash) location.hash = '#/chat';
syncNav();
