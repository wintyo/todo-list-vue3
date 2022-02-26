<script setup lang="ts">
import Accordion from './Accordion.vue';

import {} from 'vue';
import type { Todo, TodoGroup } from '~/types/Todo';

const props = defineProps<{
  groupName: string;
  isOpen: boolean;
  todos: Array<Todo>;
}>();

const emits = defineEmits<{
  (e: 'update:todoGroup', todoGroup: TodoGroup): void;
}>();

const onChangeIsOpen = (isOpen: boolean) => {
  console.log(isOpen);
  emits('update:todoGroup', {
    groupName: props.groupName,
    isOpen,
    todos: props.todos,
  });
};
</script>

<template lang="pug">
div
  Accordion(
    :modelValue="props.isOpen"
    @update:modelValue="onChangeIsOpen"
  )
    template(v-slot:head)
      .header
        div {{ props.groupName }}
        button delete
    div コンテンツ
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
