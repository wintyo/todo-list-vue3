<script setup lang="ts">
import Modal from './components/Modal.vue';
import TodoGroup from './components/TodoGroup.vue';

import { reactive } from 'vue';
import { useTodoStore } from './stores/todo';
import type {
  TodoGroup as TodoGroupType,
  Todo as TodoType,
} from '~/types/Todo';

const todoStore = useTodoStore();

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

const onUpdateTodoGroup = (index: number, todoGroup: TodoGroupType) => {
  todoStore.updateTodoGroup(index, todoGroup);
};

const onRemoveTodoGroup = (index: number) => {
  todoStore.removeTodoGroup(index);
};

const onAddTodo = (index: number, todo: TodoType) => {
  todoStore.addTodo(index, todo);
};

const onUpdateTodo = (
  groupIndex: number,
  todoIndex: number,
  todo: TodoType
) => {
  todoStore.updateTodo(groupIndex, todoIndex, todo);
};

const onSubmitCreateTodoGroup = (event: Event) => {
  event.preventDefault();
  console.log('submit', state.inputTodoGroupName);
  todoStore.addTodoGroup(state.inputTodoGroupName);
  state.inputTodoGroupName = '';
  state.isModalOpen = false;
};
</script>

<template lang="pug">
.app
  h1 TODOリスト
  button(style='margin-bottom: 8px', @click='state.isModalOpen = true') TODOグループ作成
  div
    template(v-for='(todoGroup, index) in todoStore.todoGroups')
      TodoGroup(
        :groupName='todoGroup.groupName',
        :isOpen='todoGroup.isOpen',
        :todos='todoGroup.todos',
        @update:todoGroup='onUpdateTodoGroup(index, $event)',
        @remove='onRemoveTodoGroup(index)',
        @add:todo='onAddTodo(index, $event)',
        @update:todo='(todoIndex, todo) => { onUpdateTodo(index, todoIndex, todo); }'
      )
  Modal(v-model='state.isModalOpen')
    form.modal-content(@submit='onSubmitCreateTodoGroup')
      input(v-model='state.inputTodoGroupName', placeholder='TODOグループ名')
      button(style='margin-left: 8px', type='submit') 作成
</template>

<style lang="scss" scoped>
.app {
  margin: 0 auto;
  max-width: 1000px;
}

.modal-content {
  padding: 20px;
}
</style>
