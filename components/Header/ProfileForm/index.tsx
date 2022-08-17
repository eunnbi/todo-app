import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useForm } from "../../../hooks/useForm";
import userState from "../../../store/user";
import { ProfileState } from "../../../types/profile";
import CustomModal from "../../common/CustomModal";
import FormInput from "../../common/FormInput";
import { useEditProfile } from "./useEditProfile";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface ProfileFormProps {
  open: boolean;
  handleClose: () => void;
}

const ProfileForm = ({ open, handleClose }: ProfileFormProps) => {
  const user = useRecoilValue(userState);
  const { form, onChange, initialize } = useForm<
    Pick<ProfileState, "username">
  >({
    username: "",
  });
  const [errorText, setErrorText] = useState("");
  const { loading, editProfile } = useEditProfile();
  const onClose = () => {
    handleClose();
    initialize();
    setErrorText("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user?.id === undefined) return;
    if (form.username === "") {
      setErrorText("이름을 입력하세요!");
      return;
    }
    editProfile(user.id, form.username);
    onClose();
  };

  return (
    <CustomModal open={open} handleClose={onClose}>
      <Form onSubmit={onSubmit}>
        <h2>이름 수정하기</h2>
        <FormInput
          name="username"
          value={form.username}
          label="이름"
          onChange={onChange}
          error={errorText !== ""}
          type="text"
          helperText={errorText}
        />
        <SubmitButton variant="contained" type="submit">
          {loading ? "수정하는 중..." : "수정하기"}
        </SubmitButton>
      </Form>
    </CustomModal>
  );
};

export default ProfileForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  h2 {
    text-align: center;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #000;
  color: white;
  padding: 0.5rem 0;
  &:hover {
    background-color: #000;
  }
`;
