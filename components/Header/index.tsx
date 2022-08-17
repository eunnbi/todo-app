import { useUser } from "../../hooks/useUser";
import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";
import { useProfile } from "./useProfile";
import { useModal } from "../../hooks/useModal";
import ProfileForm from "./ProfileForm";

const Header = () => {
  const { user } = useUser();
  const { profile } = useProfile(user?.id, user?.email);
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Wrapper>
        <h1>{profile.username !== "" && profile.username}'s Todo App</h1>
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
