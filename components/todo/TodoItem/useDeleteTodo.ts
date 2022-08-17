import { useSetRecoilState } from "recoil";
import { deleteTodo } from "../../../api/todo";
import { todoListState } from "../../../store/todo";

export const useDeleteTodo = (id: number) => {
  const setTodoList = useSetRecoilState(todoListState);
  const deleteUserTodo = async () => {
    const { data } = await deleteTodo({ id });
    if (data !== null) {
      setTodoList((todoList) =>
        todoList.filter((todo) => todo.id !== data[0].id)
      );
    }
  };
  return { deleteUserTodo };
};
