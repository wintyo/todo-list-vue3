import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.mount('#app');

// localStorageに保存する
watch(
  pinia.state,
  (newState) => {
    console.log(newState);
    localStorage.setItem('piniaState', JSON.stringify(newState));
  },
  {
    deep: true,
  }
);
