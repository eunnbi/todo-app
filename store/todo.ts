import { atom, selector } from "recoil";
import { TodoState } from "../types/todo";

export const todoListState = atom<TodoState[]>({
  key: "todoListState",
  default: [{ id: 0, text: "default", done: false }],
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalDoneNum = todoList.filter((todo) => todo.done).length;
    const percentage =
      totalNum === 0 ? 0 : Number(((totalDoneNum / totalNum) * 100).toFixed(0));

    return {
      totalNum,
      totalDoneNum,
      percentage,
    };
  },
});
