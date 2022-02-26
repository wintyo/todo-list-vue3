import { defineStore } from 'pinia';
import { TodoGroup } from '~/types/Todo';

type State = {
  todoGroups: TodoGroup[];
};

function initialState(): State {
  const stateStr = localStorage.getItem('piniaState');
  try {
    const rootState = JSON.parse(stateStr || '');
    return rootState.todo;
  } catch {
    return {
      todoGroups: [],
    };
  }
}

export const useTodoStore = defineStore('todo', {
  state: initialState,
  actions: {
    addTodoGroup(groupName: string) {
      this.todoGroups.push({
        groupName,
        isOpen: false,
        todos: [],
      });
    },
    updateTodoGroup(index: number, todoGroup: TodoGroup) {
      this.todoGroups[index] = todoGroup;
    },
    removeTodoGroup(index: number) {
      this.todoGroups.splice(index, 1);
    },
  },
});
