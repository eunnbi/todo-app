import { TodoState } from "../../../types/todo";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import CheckBox from "./CheckBox";
import EditInput from "./EditInput";
import { useEditInput } from "./useEditInput";
import { useDeleteTodo } from "./useDeleteTodo";

const TodoItem = (todo: TodoState) => {
  const { id, text, done } = todo;
  const { isEdit, showEditInput, notShowEditInput } = useEditInput();
  const { deleteUserTodo } = useDeleteTodo(id);
  return (
    <Item>
      <Wrapper>
        <CheckBox {...todo} />
        {isEdit ? (
          <EditInput todo={todo} notShowEditInput={notShowEditInput} />
        ) : (
          <span
            className={css`
              opacity: ${done ? "0.5" : "1"};
              word-break: break-all;
            `}
          >
            {text}
          </span>
        )}
      </Wrapper>
      <ControlBox>
        <MdOutlineEdit onClick={showEditInput} />
        <MdDeleteOutline onClick={deleteUserTodo} />
      </ControlBox>
    </Item>
  );
};

export default TodoItem;

const ControlBox = styled.div`
  position: absolute;
  right: 0.5rem;
  display: none;
  svg {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.color.mainColor};
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  border-radius: 1rem;
  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(225, 225, 225, 0.3);
    ${ControlBox} {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.2rem;
  width: 100%;
`;
