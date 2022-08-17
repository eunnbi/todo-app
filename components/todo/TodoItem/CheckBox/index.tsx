import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "@emotion/styled";
import { TodoState } from "../../../../types/todo";
import { useCheckTodo } from "./useCheckTodo";

const CheckBox = ({ id, done, text }: TodoState) => {
  const { checkToggle } = useCheckTodo({ id, done, text });
  return (
    <Button done={done} onClick={checkToggle} type="button">
      {done ? <IoMdCheckboxOutline /> : <MdCheckBoxOutlineBlank />}
    </Button>
  );
};

export default CheckBox;

const Button = styled.button<{ done: boolean }>`
  margin-top: 5px;
  color: #000;
  svg {
    opacity: 1;
    color: ${({ theme, done }) =>
      done ? theme.color.mainColor : theme.color.textColor};
  }
`;
