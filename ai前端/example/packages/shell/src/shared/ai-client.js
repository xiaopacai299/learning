export function createAIClient(getContext) {
  return {
    async *chatStream({ prompt }) {
      const { modelId, traceId } = getContext();
      const fake = `[${modelId} · ${traceId}] 模拟：${prompt || '你好'}`;
      for (const ch of fake) {
        await new Promise((r) => setTimeout(r, 25));
        yield { type: 'delta', text: ch };
      }
      yield { type: 'done' };
    },
  };
}
