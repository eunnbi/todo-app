import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postTodo, getTodos } from "../../../api/todo";
import { todoListState } from "../../../store/todo";
import userState from "../../../store/user";

export const useAddTodo = () => {
  const [errorText, setErrorText] = useState("");
  const user = useRecoilValue(userState);
  const setTodoList = useSetRecoilState(todoListState);
  const addTodo = async (todo: string) => {
    if (todo === "") {
      setErrorText("할일을 입력하세요!");
      return;
    }
    const { data } = await postTodo(todo, user!.id);
    if (data !== null) {
      setTodoList((todoList) => todoList.concat(data));
    }
  };
  return { addTodo, errorText };
};
