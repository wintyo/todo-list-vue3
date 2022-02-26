<script setup lang="ts">
import Modal from './Modal.vue';

import { reactive } from 'vue';

type Props = {
  title: string;
};
const props = defineProps<Props>();

type State = {
  isOpen: boolean;
  dialogOption?: DialogOptions;
};

const state = reactive<State>({
  isOpen: false,
  dialogOption: undefined,
});

type DialogOptions = {
  okAction?: () => void;
  ngAction?: () => void;
  onClose?: () => void;
};

const open = (options: DialogOptions) => {
  state.dialogOption = options;
  state.isOpen = true;
};

const close = () => {
  state.isOpen = false;
  if (state.dialogOption && state.dialogOption.onClose) {
    state.dialogOption.onClose();
  }
};

const onChangeIsOpen = (isOpen: boolean) => {
  state.isOpen = isOpen;
  state.dialogOption = undefined;
};

const okButtonClick = () => {
  if (state.dialogOption && state.dialogOption.okAction) {
    state.dialogOption.okAction();
  } else {
    close();
  }
};

const ngButtonClick = () => {
  if (state.dialogOption && state.dialogOption.ngAction) {
    state.dialogOption.ngAction();
  } else {
    close();
  }
};

defineExpose({
  open,
  close,
});
</script>

<template lang="pug">
Modal(:modelValue='state.isOpen', @update:modelValue='onChangeIsOpen')
  template(v-if='state.dialogOption')
    .dialog-content
      div {{ props.title }}
      .action-row
        button(@click='ngButtonClick') NG
        button(style='margin-left: 4px', @click='okButtonClick') OK
</template>

<style lang="scss" scoped>
.dialog-content {
  padding: 20px;
}

.action-row {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
