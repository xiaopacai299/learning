<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  shellProps: { type: Object, default: () => ({}) },
});

const modelId = ref('-');
const sessionId = ref('（等待 Chat 广播）');
const text = ref("function hello() { return 'world'; }");
const unsubs = [];

onMounted(() => {
  const { globalStore, eventBus } = props.shellProps;
  if (globalStore) {
    unsubs.push(globalStore.subscribe((s) => { modelId.value = s.modelId; }));
  }
  if (eventBus) {
    unsubs.push(eventBus.on('ai:session:changed', (p) => { sessionId.value = p.sessionId; }));
  }
});

onUnmounted(() => {
  unsubs.forEach((fn) => fn && fn());
});

function emitSelection() {
  const { eventBus } = props.shellProps;
  eventBus?.emit('editor:selection', { text: text.value.slice(0, 40) + '…' });
}
</script>

<template>
  <div class="subapp subapp-editor">
    <h2>📝 Editor · Vue 3</h2>
    <p class="subapp-meta">qiankun 子应用 editor-vue3 · 独立端口 7102</p>
    <p>当前模型：<strong>{{ modelId }}</strong></p>
    <p>会话 ID：<code>{{ sessionId }}</code></p>
    <textarea v-model="text" style="width: 100%; height: 80px" />
    <button type="button" @click="emitSelection">模拟：将选区发给 Chat</button>
  </div>
</template>
