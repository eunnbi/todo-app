import { atom } from "recoil";

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
});
