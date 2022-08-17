import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";
import { useModal } from "../../hooks/useModal";
import ProfileForm from "./ProfileForm";

const Header = ({ title }: { title: string }) => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <HeaderMenu handleOpen={handleOpen} />
      </Wrapper>
      <ProfileForm open={open} handleClose={handleClose} />
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  h1 {
    font-size: 1.5rem;
  }
`;
