import type { NextPage } from "next";
import styled from "@emotion/styled";
import CustomHead from "../components/common/CustomHead";
import TodoTemplate from "../components/TodoTemplate";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead />
      <Wrapper>
        <TodoTemplate />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
