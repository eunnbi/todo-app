import { useForm } from "../../../hooks/useForm";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useAddTodo } from "./useAddTodo";
import React from "react";
import FormInput from "../../common/FormInput";

const TodoInput = () => {
  const { form, onChange, initialize } = useForm<{ todo: string }>({
    todo: "",
  });
  const { errorText, addTodo } = useAddTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(form.todo);
    initialize();
  };

  return (
    <Form
      onSubmit={onSubmit}
      className={css`
        width: 100%;
      `}
    >
      <FormInput
        value={form.todo}
        name="todo"
        onChange={onChange}
        label="할일을 입력한 후 Enter를 누르세요"
        helperText={errorText}
        error={errorText !== ""}
        type="text"
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
  height: 8rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
  padding: 1rem;
`;
