import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4010,
  },
  // aliasは上手く解消されない。。
  resolve: {
    // alias: {
    //   '~/': path.resolve(__dirname, 'src/'),
    // },
    alias: [
      {
        find: '~/',
        replacement: './src/',
      },
    ],
  },
  plugins: [
    vue(),
    // tsconfigPaths({
    //   extensions: ['.ts', '.vue'],
    // }),
  ],
});
