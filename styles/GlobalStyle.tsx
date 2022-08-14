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
        input {
          color: ${theme.color.textColor};
        }
        ::-webkit-scrollbar {
          width: 5px; /* 세로축 스크롤바 길이 */
          height: 5px; /* 가로축 스크롤바 길이 */
        }
        ::-webkit-scrollbar-track {
          background-color: ${theme.color.boxColor};
        }
        ::-webkit-scrollbar-track-piece {
          background-color: ${theme.color.boxColor};
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: lightgray;
        }
      `}
    />
  );
};

export default GlobalStyle;
