import { useSetRecoilState } from "recoil";
import { todoListState } from "../../store/todo";

export const useDeleteTodo = (id: number) => {
  const setTodoList = useSetRecoilState(todoListState);
  const deleteTodo = () =>
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  return { deleteTodo };
};
