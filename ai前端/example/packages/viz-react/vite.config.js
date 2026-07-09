import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

/**
 * 不用 @vitejs/plugin-react：它会注入 @react-refresh 模块脚本，
 * qiankun import-html-entry 在 dev 下会当普通脚本执行而报错。
 * JSX 交给 esbuild 处理即可（Demo 足够）。
 */
export default defineConfig({
  plugins: [qiankun('viz-react', { useDevMode: true })],
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    port: 7103,
    cors: true,
    origin: 'http://localhost:7100',
    hmr: false,
  },
  base: 'http://localhost:7103/',
});
