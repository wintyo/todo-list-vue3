<script setup lang="ts">
import { watch } from 'vue';
import { useRefs } from '../composables/useRefs';

type Props = {
  modelValue: boolean;
};
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void;
}>();

watch(
  () => props.modelValue,
  (newValue) => {
    console.log(newValue);
    const { elDialog } = refs;
    if (elDialog == null) {
      return;
    }
    if (newValue) {
      elDialog.showModal();
    } else {
      elDialog.close();
    }
  }
);

type DialogElement = Element & {
  showModal: () => void;
  close: () => void;
};

type Refs = {
  elDialog: DialogElement | null;
};

const { refs, setRef } = useRefs<Refs>({
  elDialog: null,
});

const onClose = () => {
  emit('update:modelValue', false);
};
</script>

<template lang="pug">
dialog.dialog(:ref='setRef("elDialog")', @click='onClose')
  div(@click.stop)
    slot
</template>

<style lang="scss" scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  display: block;
  padding: 0;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 10px #000;
  opacity: 0;
  transition: all 0.5s ease;

  &[open] {
    opacity: 1;
    // animation: fade 0.5s ease 0s backwards;
  }

  &::backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#000, 0.4);
  }
}
</style>
