import styled from "@emotion/styled";
import React from "react";
import { useForm } from "../../../hooks/useForm";
import { TodoState } from "../../../store/todo";
import { useEditTodo } from "./useEditTodo";

interface EditInputProps {
  text: TodoState["text"];
  id: TodoState["id"];
  notShowEditInput: () => void;
}

const EditInput = ({ text, id, notShowEditInput }: EditInputProps) => {
  const { form, onChange } = useForm({
    todo: text,
  });
  const { editTodo } = useEditTodo(id);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo({ text: form.todo });
    notShowEditInput();
  };
  return (
    <form onSubmit={onSubmit}>
      <Input value={form.todo} onChange={onChange} name="todo" />
      <Text>수정 후 Enter를 누르세요 :)</Text>
    </form>
  );
};

export default EditInput;

const Input = styled.input`
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

const Text = styled.p`
  margin-top: 0.3rem;
  font-size: 0.7rem;
  opacity: 0.7;
`;
