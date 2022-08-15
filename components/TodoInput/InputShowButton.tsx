import styled from "@emotion/styled";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface InputShowButtondProps {
  showInput: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const InputShowButton = ({ showInput, onClick }: InputShowButtondProps) => {
  return (
    <Button onClick={onClick} show={showInput}>
      {showInput ? <IoClose /> : <FiPlus />}
    </Button>
  );
};

export default InputShowButton;

const Button = styled.button<{ show: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-2rem, 50%);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ show, theme }) =>
    show ? "red" : theme.color.mainColor};
  svg {
    color: white;
    font-size: 2rem;
  }
`;
