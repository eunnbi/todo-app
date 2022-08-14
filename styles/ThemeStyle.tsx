import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { isLightThemeState } from "../store/theme";
import { darkTheme, lightTheme } from "./theme";

const ThemeStyle = ({ children }: React.PropsWithChildren) => {
  const isLightTheme = useRecoilValue(isLightThemeState);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeStyle;
