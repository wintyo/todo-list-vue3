import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA({
      manifest: {
        lang: 'ja',
        name: 'TODO List',
        short_name: 'TODO',
        background_color: '#fff',
        theme_color: '#3cb371',
        display: 'standalone',
        scope: '/todo-list-vue3/',
        start_url: '/todo-list-vue3/',
        icons: [
          {
            src: 'app-icons/48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'app-icons/72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'app-icons/96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'app-icons/144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'app-icons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'app-icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
