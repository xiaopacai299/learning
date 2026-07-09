export function createGlobalStore(initial) {
  let state = { ...initial };
  const listeners = new Set();
  return {
    getState: () => state,
    setModel(modelId) {
      state = { ...state, modelId };
      listeners.forEach((fn) => fn(state));
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(state);
      return () => listeners.delete(fn);
    },
  };
}
