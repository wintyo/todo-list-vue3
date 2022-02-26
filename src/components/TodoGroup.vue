<script setup lang="ts">
import Accordion from './Accordion.vue';
import Dialog from './Dialog.vue';
import Todo from './Todo.vue';

import { reactive } from 'vue';
import { useRefs } from '../composables/useRefs';
import type { Todo as TodoType, TodoGroup } from '~/types/Todo';

const props = defineProps<{
  groupName: string;
  isOpen: boolean;
  todos: Array<TodoType>;
}>();

type Refs = {
  dialog: InstanceType<typeof Dialog> | null;
};
const { refs, setRef } = useRefs<Refs>({
  dialog: null,
});

const emit = defineEmits<{
  (e: 'update:todoGroup', todoGroup: TodoGroup): void;
  (e: 'remove'): void;
  (e: 'add:todo', todo: TodoType): void;
  (e: 'update:todo', todoIndex: number, todo: TodoType): void;
}>();

type State = {
  todoName: string;
};
const state = reactive<State>({
  todoName: '',
});

const onChangeIsOpen = (isOpen: boolean) => {
  emit('update:todoGroup', {
    groupName: props.groupName,
    isOpen,
    todos: props.todos,
  });
};

const onDeleteButtonClick = () => {
  const { dialog } = refs;
  if (dialog == null) {
    return;
  }
  dialog.open({
    okAction: () => {
      emit('remove');
      dialog.close();
    },
  });
};

const onUpdateTodo = (todoIndex: number, todo: TodoType) => {
  emit('update:todo', todoIndex, todo);
};

const onTodoSubmit = (event: Event) => {
  event.preventDefault();
  emit('add:todo', {
    text: state.todoName,
    isChecked: false,
  });
  state.todoName = '';
};
</script>

<template lang="pug">
div
  Accordion(:modelValue='props.isOpen', @update:modelValue='onChangeIsOpen')
    template(v-slot:head)
      .header
        div {{ props.groupName }}
        button(@click='onDeleteButtonClick') delete
    div
      template(v-for='(todo, index) in props.todos')
        Todo(:todo='todo', @update:todo='onUpdateTodo(index, $event)')
    form(@submit='onTodoSubmit')
      input(v-model='state.todoName', placeholder='TODO')
      button(
        style='margin-left: 4px',
        type='submit',
        :disabled='state.todoName === ""'
      ) 追加
  Dialog(:ref='setRef("dialog")', title='削除してもいいですか？')
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
