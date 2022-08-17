import { useForm } from "../../../hooks/useForm";
import FormInput from "../../common/FormInput";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { AuthState } from "../../../types/auth";
import { useLogin } from "./useLogin";
import { signInGoogle } from "../../../api/auth";

const LoginForm = () => {
  const { form, onChange } = useForm<AuthState>({
    email: "",
  });
  const { onLogin, loading, error, helperText } = useLogin(form);
  return (
    <FormWrapper>
      <Form onSubmit={onLogin}>
        <h2>Welcome to Todo App :)</h2>
        <FormInput
          name="email"
          label="이메일"
          type="email"
          error={error}
          value={form.email}
          onChange={onChange}
          helperText={helperText}
        />
        <ButtonBox>
          <SubmitButton
            variant="contained"
            type="submit"
            disabled={loading ? true : false}
          >
            {loading ? "링크 보내는 중... " : "로그인 링크 보내기"}
          </SubmitButton>
          <GoogleLoginButton onClick={signInGoogle}>
            구글로 로그인하기
          </GoogleLoginButton>
        </ButtonBox>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 350px;
  width: 90vw;
  background-color: ${({ theme }) => theme.color.boxColor};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
  margin: 0 auto;
  h2 {
    text-align: center;
    font-family: Pangolin;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #000;
  color: white;
  padding: 0.5rem 0;
  font-family: NotoSans;
  &:hover {
    background-color: #000;
  }
`;

const GoogleLoginButton = styled(Button)`
  background-color: #4285f4;
  color: white;
  padding: 0.5rem 0;
  font-family: NotoSans;
  &:hover {
    background-color: #4285f4;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
