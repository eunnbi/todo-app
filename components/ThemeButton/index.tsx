import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDarkMode } from "../../hooks/useDarkMode";

const ThemeButton = () => {
  const { name } = useTheme();
  const { changeTheme } = useDarkMode();
  return (
    <Button onClick={changeTheme}>
      {name === "light" ? <Sunny /> : <IoMoon />}
    </Button>
  );
};

export default ThemeButton;

const Button = styled.button`
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

const Sunny = styled(IoSunny)`
  color: #f29f21 !important;
`;
