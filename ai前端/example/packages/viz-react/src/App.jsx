import { useEffect, useState } from 'react';

export default function App({ shellProps = {} }) {
  const [modelId, setModelId] = useState('-');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const { globalStore, eventBus } = shellProps;
    const unsubs = [];

    if (globalStore) {
      unsubs.push(globalStore.subscribe((s) => setModelId(s.modelId)));
    }
    if (eventBus) {
      const push = (kind) => (payload) => {
        setEvents((prev) => [`[${kind}] ${JSON.stringify(payload)}`, ...prev].slice(0, 8));
      };
      unsubs.push(eventBus.on('ai:session:changed', push('session')));
      unsubs.push(eventBus.on('ai:model:changed', push('model')));
      unsubs.push(eventBus.on('editor:selection', push('selection')));
    }

    return () => unsubs.forEach((fn) => fn && fn());
  }, [shellProps]);

  return (
    <div className="subapp subapp-viz">
      <h2>📊 Viz · React</h2>
      <p className="subapp-meta">qiankun 子应用 viz-react · 独立端口 7103</p>
      <p>
        当前模型：<strong>{modelId}</strong>
      </p>
      <p>监听到的事件：</p>
      <ul className="events">
        {events.length === 0 ? <li>（暂无）</li> : events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </div>
  );
}
