import { useSetRecoilState } from "recoil";
import { TodoState } from "../../../../types/todo";
import { todoListState } from "../../../../store/todo";
import { updateTodo } from "../../../../api/todo";

export const useEditTodo = ({ id, done }: TodoState) => {
  const setTodoList = useSetRecoilState(todoListState);
  const editTodo = async (text: string) => {
    const { data } = await updateTodo({ id, done, text });
    if (data !== null) {
      setTodoList((todoList) =>
        todoList.map((todo) =>
          todo.id === data[0].id ? { ...todo, text: data[0].text } : todo
        )
      );
    }
  };

  return { editTodo };
};
