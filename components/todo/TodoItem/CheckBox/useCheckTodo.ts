import { useSetRecoilState } from "recoil";
import { updateTodo } from "../../../../api/todo";
import { todoListState } from "../../../../store/todo";
import { TodoState } from "../../../../types/todo";

export const useCheckTodo = ({ id, done, text }: TodoState) => {
  const setTodoList = useSetRecoilState(todoListState);
  const checkToggle = async () => {
    const { data } = await updateTodo({ id, done: !done, text });
    if (data !== null) {
      setTodoList((todoList) =>
        todoList.map((todo) =>
          todo.id === data[0].id ? { ...todo, done: data[0].done } : todo
        )
      );
    }
  };

  return { checkToggle };
};
