import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getTodos } from "../../../api/todo";
import { todoListState } from "../../../store/todo";
import userState from "../../../store/user";

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const user = useRecoilValue(userState);
  const getUserTodos = async () => {
    if (user === null) return;
    const { data } = await getTodos(user.id);
    console.log(data);
    if (data !== null) {
      setTodoList(data);
    }
  };
  useEffect(() => {
    getUserTodos();
  }, [user]);
  return { todoList };
};
