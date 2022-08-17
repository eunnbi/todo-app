import styled from "@emotion/styled";
import { useToggle } from "../../../hooks/useToggle";
import TodoInput from "../TodoInput";
import InputShowButton from "../TodoInput/InputShowButton";
import TodoList from "../TodoList";
import TodoProgressBar from "../TodoProgressBar";
import TodoTitle from "../TodoTitle";

const TodoTemplate = () => {
  const [showInput, setShowInput] = useToggle(false);
  return (
    <Wrapper>
      <TodoTitle />
      <TodoProgressBar />
      <TodoList />
      {showInput ? <TodoInput /> : null}
      <InputShowButton onClick={setShowInput} showInput={showInput} />
    </Wrapper>
  );
};

export default TodoTemplate;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.boxColor};
  width: 100%;
  height: 80vh;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
`;
