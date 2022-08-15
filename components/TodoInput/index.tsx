import { useForm } from "../../hooks/useForm";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useAddTodo } from "./useAddTodo";
import React from "react";

const TodoInput = () => {
  const { form, onChange, initialize } = useForm<{ todo: string }>({
    todo: "",
  });
  const { addTodo } = useAddTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: form.todo });
    initialize();
  };

  return (
    <Form
      onSubmit={onSubmit}
      className={css`
        width: 100%;
      `}
    >
      <Input
        value={form.todo}
        onChange={onChange}
        name="todo"
        placeholder="할일을 입력한 후 Enter를 누르세요"
      />
    </Form>
  );
};

export default TodoInput;

const Form = styled.form`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 7rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
  padding: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0;
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: ${({ theme }) => theme.color.bgColor};
`;
