import { useTheme, css, Global } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          color: ${theme.color.textColor};
          background-color: ${theme.color.bgColor};
          transition: all 0.2s ease-in-out;
        }
      `}
    />
  );
};

export default GlobalStyle;
