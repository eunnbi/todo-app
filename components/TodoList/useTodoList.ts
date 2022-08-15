import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../store/todo";
import { getTodos, saveTodos } from "../../utils/todos";

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  useEffect(() => {
    if (todoList.length > 0 && todoList[0].id === 0) {
      setTodoList(getTodos());
    } else {
      saveTodos(todoList);
    }
  }, [todoList]);
  return { todoList };
};
