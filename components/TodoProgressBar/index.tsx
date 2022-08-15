import { useTodoList } from "../../hooks/useTodoList";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const TodoProgressBar = () => {
  const { todoList } = useTodoList();
  const totalNum = todoList.length;
  const totalDoneNum = todoList.filter((todo) => todo.done).length;
  const percentage =
    totalNum === 0
      ? 0
      : Number(((totalDoneNum / todoList.length) * 100).toFixed(0));
  return (
    <Wrapper>
      <Bar>
        <Done percentage={percentage} />
      </Bar>
      <span>{percentage} %</span>
    </Wrapper>
  );
};

export default TodoProgressBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  & > span {
    color: ${({ theme }) => theme.color.mainColor};
  }
`;

const Bar = styled.div`
  flex-grow: 1;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: 1rem;
`;

const Done = styled.div<{ percentage: number }>`
  height: 0.4rem;
  background-color: ${({ theme }) => theme.color.mainColor};
  border-radius: 1rem;
  width: ${({ percentage }) => `${percentage}%`};
`;
