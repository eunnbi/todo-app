import { useSetRecoilState } from "recoil";
import { todoListState, TodoState } from "../../../store/todo";

export const useEditTodo = (id: number) => {
  const setTodoList = useSetRecoilState(todoListState);
  const editTodo = ({ text }: Pick<TodoState, "text">) => {
    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return { editTodo };
};
