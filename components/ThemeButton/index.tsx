import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDarkMode } from "../../hooks/useDarkMode";
import { IconButton } from "../common/IconButton";

const ThemeButton = () => {
  const { name } = useTheme();
  const { changeTheme } = useDarkMode();
  return (
    <IconButton onClick={changeTheme}>
      {name === "light" ? <Sunny /> : <IoMoon />}
    </IconButton>
  );
};

export default ThemeButton;

const Sunny = styled(IoSunny)`
  color: #f29f21 !important;
`;
