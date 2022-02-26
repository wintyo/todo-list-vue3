<script setup lang="ts">
import Accordion from './components/Accordion.vue';
import Modal from './components/Modal.vue';

import { reactive } from 'vue';

type State = {
  isModalOpen: boolean;
  isAccordionOpen: boolean;
};

const state = reactive<State>({
  isModalOpen: false,
  isAccordionOpen: false,
});
</script>

<template lang="pug">
.app
  div TODOリスト
  Accordion(v-model="state.isAccordionOpen")
    template(v-slot:head)
      .header
        div head
        button delete
    div コンテンツ
  button(@click="state.isModalOpen = true") modal open
  Modal(v-model="state.isModalOpen")
    div hogehoge
</template>

<style lang="scss" scoped>
.app {
  margin: 0 auto;
  max-width: 1000px;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
