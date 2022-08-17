import { atom, selector, selectorFamily } from "recoil";
import { TodoState } from "../types/todo";
import { getTodos } from "../api/todo";

export const todoListState = atom<TodoState[]>({
  key: "todoListState",
  default: [],
});

export const todoListQuery = selectorFamily<TodoState[], string | undefined>({
  key: "todoLsitQuery",
  get: (userId) => async () => {
    if (userId === undefined) return [];
    const { data, error } = await getTodos(userId);
    if (error) return [];
    return data;
  },
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
