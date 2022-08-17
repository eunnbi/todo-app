import type { NextPage } from "next";
import styled from "@emotion/styled";
import CustomHead from "../components/common/CustomHead";
import TodoTemplate from "../components/todo/TodoTemplate";
import { useSession } from "../hooks/useSession";
import LoginForm from "../components/login/LoginForm";
import Header from "../components/Header";

const Home: NextPage = () => {
  const { session } = useSession();
  return (
    <>
      <CustomHead />
      <Wrapper>
        {session === null ? (
          <LoginForm />
        ) : (
          <>
            <Header />
            <TodoTemplate />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  max-width: 500px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
