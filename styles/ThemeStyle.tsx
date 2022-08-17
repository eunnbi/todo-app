import { ThemeProvider } from "@emotion/react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { isLightThemeState } from "../store/theme";
import { darkTheme, lightTheme, muiTheme } from "./theme";

const ThemeStyle = ({ children }: React.PropsWithChildren) => {
  const isLightTheme = useRecoilValue(isLightThemeState);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeStyle;
