import { atom } from "recoil";

export interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

export const todoListState = atom<TodoState[]>({
  key: "todoListState",
  default: [],
});
