import styled from "@emotion/styled";
import { FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../../../hooks/useForm";
import { TodoState } from "../../../../types/todo";
import { useEditTodo } from "./useEditTodo";

interface EditInputProps {
  todo: TodoState;
  notShowEditInput: () => void;
}

const EditInput = ({ todo, notShowEditInput }: EditInputProps) => {
  const { form, onChange } = useForm({
    todo: todo.text,
  });
  const { editTodo } = useEditTodo(todo);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(form.todo);
    notShowEditInput();
  };
  return (
    <form onSubmit={onSubmit}>
      <CustomTextField
        variant="standard"
        name="todo"
        value={form.todo}
        onChange={onChange}
      />
      <Text>수정 후 Enter를 누르세요 :)</Text>
    </form>
  );
};

export default EditInput;

const CustomTextField = styled(TextField)`
  width: 100%;
  input {
    color: ${({ theme }) => theme.color.textColor};
  }
`;

const Text = styled(FormHelperText)`
  margin-top: 0.3rem;
  font-size: 0.7rem;
  color: ${({ theme }) => (theme.name === "light" ? "gray" : "lightgray")};
`;
