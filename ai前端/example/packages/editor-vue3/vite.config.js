import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [vue(), qiankun('editor-vue3', { useDevMode: true })],
  server: {
    port: 7102,
    cors: true,
    origin: 'http://localhost:7100',
  },
  base: 'http://localhost:7102/',
});
