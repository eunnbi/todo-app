import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../../store/todo";

const TodoProgressBar = () => {
  const { percentage } = useRecoilValue(todoListStatsState);
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
