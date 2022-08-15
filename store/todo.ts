import { atom, selector } from "recoil";

export interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

export const todoListState = atom<TodoState[]>({
  key: "todoListState",
  default: [],
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
