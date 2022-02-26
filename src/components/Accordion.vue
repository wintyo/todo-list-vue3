<script setup lang="ts">
type Props = {
  modelValue: boolean;
};
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void;
}>();

const onToggle = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLElement)) {
    return;
  }
  emit('update:modelValue', event.currentTarget.getAttribute('open') != null);
};
</script>

<template lang="pug">
details.details(:open='props.modelValue', @toggle='onToggle')
  summary.header
    .header__icon
    .header__content
      slot(name='head')
  .content
    slot
</template>

<style lang="scss" scoped>
.details {
  $root: &;

  border: solid 1px #ccc;
}

.header {
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  padding: 20px;
  background-color: #e4e4e4;
  font-weight: bold;

  &__icon {
    margin-right: 10px;
    width: 7px;
    height: 7px;
    border-left: solid 3px #000;
    border-bottom: solid 3px #000;
    transform: rotate(-45deg);
    content: '';

    .details[open] & {
      transform: rotate(135deg);
    }
  }

  &__content {
    flex: 1 1 0;
  }
}

.content {
  padding: 20px;
}
</style>
