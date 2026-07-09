export function createEventBus(onLog) {
  const map = new Map();
  return {
    on(type, handler) {
      if (!map.has(type)) map.set(type, new Set());
      map.get(type).add(handler);
      return () => map.get(type)?.delete(handler);
    },
    emit(type, payload) {
      onLog?.({ type, payload, time: new Date().toLocaleTimeString() });
      map.get(type)?.forEach((fn) => fn(payload));
    },
  };
}
