export type Todo = {
  isChecked: boolean;
  text: string;
};

export type TodoGroup = {
  groupName: string;
  isOpen: boolean;
  todos: Todo[];
};
