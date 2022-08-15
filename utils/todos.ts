import { TodoState } from "../store/todo";

const TODOS = "todos" as const;

export const saveTodos = (todoList: TodoState[]) => {
  localStorage.setItem(TODOS, JSON.stringify(todoList));
};

export const getTodos = () => {
  const value = localStorage.getItem(TODOS);
  return value === null ? [] : JSON.parse(value);
};
