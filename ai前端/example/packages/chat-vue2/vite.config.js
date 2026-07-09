import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [vue(), qiankun('chat-vue2', { useDevMode: true })],
  server: {
    port: 7101,
    cors: true,
    origin: 'http://localhost:7100',
  },
  base: 'http://localhost:7101/',
});
