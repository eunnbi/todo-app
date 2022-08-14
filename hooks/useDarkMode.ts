import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLightThemeState } from "../store/theme";

const THEME = "theme" as const;

export const useDarkMode = () => {
  const [isLightTheme, setIsLightTheme] = useRecoilState(isLightThemeState);
  const changeTheme = () => {
    setIsLightTheme((isLightTheme) => !isLightTheme);
    localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
  };

  useEffect(() => {
    const value = localStorage.getItem(THEME);
    if (value !== null) {
      setIsLightTheme(JSON.parse(value));
    }
  });
  return { changeTheme };
};
