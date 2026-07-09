import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let root = null;
let mountEl = null;

function render(props = {}) {
  const { container } = props;
  const host = container || document.querySelector('#root');
  mountEl = document.createElement('div');
  host.appendChild(mountEl);

  root = ReactDOM.createRoot(mountEl);
  root.render(<App shellProps={props} />);
}

function destroy() {
  root?.unmount();
  root = null;
  if (mountEl?.parentNode) {
    mountEl.parentNode.removeChild(mountEl);
    mountEl = null;
  }
}

renderWithQiankun({
  bootstrap() {
    console.log('[viz-react] bootstrap');
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
      subscribe: (fn) => {
        fn({ modelId: 'local' });
        return () => {};
      },
    },
  });
}
