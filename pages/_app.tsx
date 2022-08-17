import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeStyle from "../styles/ThemeStyle";
import GlobalStyle from "../styles/GlobalStyle";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeStyle>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeStyle>
    </RecoilRoot>
  );
}

export default MyApp;
