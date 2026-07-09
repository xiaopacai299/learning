import Vue from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let instance = null;
let mountEl = null;

function render(props = {}) {
  const { container } = props;
  const host = container || document.querySelector('#app');
  mountEl = document.createElement('div');
  host.appendChild(mountEl);

  instance = new Vue({
    render: (h) => h(App, { props: { shellProps: props } }),
  }).$mount(mountEl);
}

function destroy() {
  if (instance) {
    instance.$destroy();
    instance = null;
  }
  if (mountEl?.parentNode) {
    mountEl.parentNode.removeChild(mountEl);
    mountEl = null;
  }
}

renderWithQiankun({
  bootstrap() {
    console.log('[chat-vue2] bootstrap');
  },
  mount(props) {
    render(props);
  },
  unmount() {
    destroy();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({ user: { name: '独立运行' }, globalStore: { subscribe: () => () => {}, getState: () => ({ modelId: 'local' }) } });
}
