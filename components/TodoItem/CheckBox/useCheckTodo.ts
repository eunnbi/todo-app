import { useSetRecoilState } from "recoil";
import { todoListState } from "../../../store/todo";

export const useCheckTodo = (id: number) => {
  const setTodoList = useSetRecoilState(todoListState);
  const checkToggle = () => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return { checkToggle };
};
