import type { NextPage } from "next";
import styled from "@emotion/styled";
import CustomHead from "../components/common/CustomHead";
import TodoTemplate from "../components/todo/TodoTemplate";
import { useSession } from "../hooks/useSession";
import { useProfile } from "../hooks/useProfile";
import { useUser } from "../hooks/useUser";
import LoginForm from "../components/login/LoginForm";
import Header from "../components/Header";

const Home: NextPage = () => {
  const { session } = useSession();
  const { user } = useUser();
  const { profile } = useProfile(user?.id, user?.email);
  const title =
    profile.username !== "" ? `${profile.username}'s Todo App` : "Todo App";
  return (
    <Wrapper>
      {session === null ? (
        <>
          <CustomHead title="Welcome to Todo App :)" />
          <LoginForm />
        </>
      ) : (
        <>
          <CustomHead title={title} />
          <Header title={title} />
          <TodoTemplate />
        </>
      )}
    </Wrapper>
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
