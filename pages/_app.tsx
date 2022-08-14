import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeStyle from "../styles/ThemeStyle";
import GlobalStyle from "../styles/GlobalStyle";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeStyle>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeStyle>
    </RecoilRoot>
  );
}

export default MyApp;
