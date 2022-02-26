import { defineStore } from 'pinia';
import { TodoGroup, Todo } from '~/types/Todo';

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
      this.todoGroups.unshift({
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
    addTodo(index: number, todo: Todo) {
      this.todoGroups[index].todos.push(todo);
    },
    updateTodo(todoGroupIndex: number, todoIndex: number, todo: Todo) {
      this.todoGroups[todoGroupIndex].todos[todoIndex] = todo;
    },
    removeTodo(todoGroupIndex: number, todoIndex: number) {
      this.todoGroups[todoGroupIndex].todos.splice(todoIndex, 1);
    },
  },
});
