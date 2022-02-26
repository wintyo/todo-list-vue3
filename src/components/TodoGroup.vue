<script setup lang="ts">
import Accordion from './Accordion.vue';
import Dialog from './Dialog.vue';

import { useRefs } from '../composables/useRefs';
import type { Todo, TodoGroup } from '~/types/Todo';

const props = defineProps<{
  groupName: string;
  isOpen: boolean;
  todos: Array<Todo>;
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
}>();

const onChangeIsOpen = (isOpen: boolean) => {
  console.log(isOpen);
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
</script>

<template lang="pug">
div
  Accordion(:modelValue='props.isOpen', @update:modelValue='onChangeIsOpen')
    template(v-slot:head)
      .header
        div {{ props.groupName }}
        button(@click='onDeleteButtonClick') delete
    div コンテンツ
  Dialog(:ref='setRef("dialog")', title='削除してもいいですか？')
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
