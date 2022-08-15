import { useSetRecoilState } from "recoil";
import { TodoState, todoListState } from "../../store/todo";

export const useAddTodo = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const addTodo = (todo: Pick<TodoState, "text">) => {
    setTodoList((todoList) =>
      todoList.concat({
        text: todo.text,
        done: false,
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      })
    );
  };

  return { addTodo };
};
