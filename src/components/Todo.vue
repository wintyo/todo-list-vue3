<script setup lang="ts">
import {} from 'vue';

import type { Todo } from '~/types/Todo';

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'update:todo', todo: Todo): void;
}>();

const onChangeCheck = (event: Event) => {
  const currentTarget = event.currentTarget;
  if (!(currentTarget instanceof HTMLInputElement)) {
    return;
  }
  emit('update:todo', {
    ...props.todo,
    isChecked: currentTarget.checked,
  });
};
</script>

<template lang="pug">
div
  label.check-area
    input(
      type='checkbox',
      :checked='props.todo.isChecked',
      @change='onChangeCheck'
    )
    span {{ props.todo.text }}
</template>

<style lang="scss" scoped>
.check-area {
  display: flex;
  align-items: center;
  height: 30px;
}
</style>
