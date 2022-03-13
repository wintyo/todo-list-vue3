import { mount } from '@vue/test-utils';
import { Todo as TTodo } from '../src/types/Todo';
import Todo from '../src/components/Todo.vue';
// import TodoGroup from '../src/components/TodoGroup.vue';

// console.log(TodoGroup);

describe('テスト', () => {
  it('テスト', () => {
    const todo: TTodo = {
      isChecked: false,
      text: 'やること',
    };
    const wrapper = mount(Todo, {
      props: {
        todo,
      },
    });
    console.log(wrapper.vm);
  });
});
