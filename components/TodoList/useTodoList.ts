import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../store/todo";

const TODO = "todo" as const;

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  useEffect(() => {
    const value = localStorage.getItem(TODO);
    if (value !== null) {
      setTodoList(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO, JSON.stringify(todoList));
  }, [todoList]);
  return { todoList };
};
