import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useToday } from "./useToday";

const TodoTitle = () => {
  const { year, month, date, day } = useToday();
  return (
    <Wrapper>
      <Wrapper>
        <span
          className={css`
            font-size: 2.5rem;
          `}
        >
          {date}
        </span>
        <Box>
          <span>{month}</span>
          <span
            className={css`
              font-weight: normal;
            `}
          >
            {year}
          </span>
        </Box>
      </Wrapper>
      <div>
        <span>{day}</span>
      </div>
    </Wrapper>
  );
};

export default TodoTitle;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  font-weight: bold;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
