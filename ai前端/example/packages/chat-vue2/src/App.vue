<template>
  <div class="subapp subapp-chat">
    <h2>💬 Chat · Vue 2</h2>
    <p class="subapp-meta">qiankun 子应用 chat-vue2 · 独立端口 7101</p>
    <p>你好，{{ userName }}。</p>
    <p>当前模型：<strong>{{ modelId }}</strong></p>
    <p>Editor 选区：<em>{{ selection }}</em></p>
    <input v-model="input" placeholder="输入后点发送" style="width: 100%; padding: 8px" />
    <button type="button" @click="send">发送（aiClient 流式）</button>
    <button type="button" @click="switchSession">切换会话</button>
    <div class="subapp-output">{{ output }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatApp',
  props: {
    shellProps: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      modelId: '-',
      selection: '（暂无）',
      input: '',
      output: '',
      userName: '演示用户',
      _unsubs: [],
    };
  },
  mounted() {
    const { globalStore, eventBus, aiClient, user } = this.shellProps;
    if (user) this.userName = user.name;
    if (globalStore) {
      this._unsubs.push(globalStore.subscribe((s) => { this.modelId = s.modelId; }));
    }
    if (eventBus) {
      this._unsubs.push(eventBus.on('editor:selection', (p) => { this.selection = p.text; }));
    }
    this._aiClient = aiClient;
  },
  beforeDestroy() {
    this._unsubs.forEach((fn) => fn && fn());
  },
  methods: {
    async send() {
      if (!this._aiClient) return;
      this.output = '';
      for await (const chunk of this._aiClient.chatStream({ prompt: this.input })) {
        if (chunk.type === 'delta') this.output += chunk.text;
      }
    },
    switchSession() {
      const { eventBus } = this.shellProps;
      eventBus?.emit('ai:session:changed', { sessionId: 'sess_' + Date.now().toString(36) });
    },
  },
};
</script>
