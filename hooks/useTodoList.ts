import { useRecoilValue } from "recoil";
import { todoListState } from "../store/todo";

export const useTodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return { todoList };
};
