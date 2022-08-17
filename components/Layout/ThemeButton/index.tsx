import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDarkMode } from "../../../hooks/useDarkMode";

const ThemeButton = () => {
  const { name } = useTheme();
  const { changeTheme } = useDarkMode();
  return (
    <Button onClick={changeTheme} name={name}>
      <Circle name={name} />
      <IoMoon />
      <IoSunny />
    </Button>
  );
};

export default ThemeButton;

const Button = styled.button<{ name: "light" | "dark" }>`
  position: fixed;
  bottom: 0.6rem;
  right: 0.6rem;
  z-index: 5;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.64rem;
  background-color: ${({ name }) => (name === "light" ? "#F29F21" : "#222222")};
  svg {
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
  }
`;

const Circle = styled.div<{ name: "light" | "dark" }>`
  position: absolute;
  top: 0.4rem;
  left: 0.3rem;
  right: 0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  transform: ${({ name }) => name === "dark" && `translateY(100%)`};
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`;
