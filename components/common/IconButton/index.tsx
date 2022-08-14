import styled from "@emotion/styled";

export const IconButton = styled.button`
  background-color: ${({ theme }) => theme.color.boxColor};
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => `1px 3px 5px ${theme.color.shadowColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.textColor};
  }
`;
