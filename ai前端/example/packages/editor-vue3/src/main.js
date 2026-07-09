import { createApp } from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let app = null;
let mountEl = null;

function render(props = {}) {
  const { container } = props;
  const host = container || document.querySelector('#app');
  mountEl = document.createElement('div');
  host.appendChild(mountEl);

  app = createApp(App, { shellProps: props });
  app.mount(mountEl);
}

function destroy() {
  app?.unmount();
  app = null;
  if (mountEl?.parentNode) {
    mountEl.parentNode.removeChild(mountEl);
    mountEl = null;
  }
}

renderWithQiankun({
  bootstrap() {
    console.log('[editor-vue3] bootstrap');
  },
  mount(props) {
    render(props);
  },
  unmount() {
    destroy();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({
    globalStore: {
      subscribe: (fn) => { fn({ modelId: 'local' }); return () => {}; },
    },
  });
}
