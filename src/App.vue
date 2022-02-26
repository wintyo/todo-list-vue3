<script setup lang="ts">
import Accordion from './components/Accordion.vue';
import Modal from './components/Modal.vue';

import { reactive } from 'vue';

type State = {
  isModalOpen: boolean;
  inputTodoGroupName: string;
  isAccordionOpen: boolean;
};

const state = reactive<State>({
  isModalOpen: false,
  inputTodoGroupName: '',
  isAccordionOpen: false,
});

const onSubmitCreateTodoGroup = (event: Event) => {
  event.preventDefault();
  console.log('submit', state.inputTodoGroupName);
  state.inputTodoGroupName = '';
  state.isModalOpen = false;
};
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
  button(@click="state.isModalOpen = true") TODOグループ作成
  Modal(v-model="state.isModalOpen")
    form.modal-content(@submit="onSubmitCreateTodoGroup")
      input(v-model="state.inputTodoGroupName", placeholder="TODOグループ名")
      button(style="margin-left: 8px;" type="submit") 作成
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

.modal-content {
  padding: 20px;
}
</style>
