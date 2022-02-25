<script setup lang="ts">
import Modal from './components/Modal.vue';

import { reactive } from 'vue';

type State = {
  isOpen: boolean;
};

const state = reactive<State>({
  isOpen: false,
});
</script>

<template lang="pug">
.app
  div TODOリスト
  button(@click="state.isOpen = true") open
  Modal(v-model="state.isOpen")
    div hogehoge
</template>

<style lang="scss">
.app {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
