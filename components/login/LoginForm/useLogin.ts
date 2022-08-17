import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { signInEmail } from "../../../api/auth";
import userState from "../../../store/user";
import { AuthState } from "../../../types/auth";

export const useLogin = ({ email }: AuthState) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const setUser = useSetRecoilState(userState);
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
      setHelperText("이메일을 입력해주세요!");
      return;
    }
    setLoading(true);
    const { user, error } = await signInEmail({ email });
    if (error) {
      setError(true);
      setHelperText("이메일을 다시 입력해주세요.");
    } else {
      console.log("success");
      setError(false);
      setHelperText("이메일에서 로그인 링크를 확인해주세요 :)");
    }
    console.log(user);
    if (user !== null) setUser(user);
    setError(false);
    setLoading(false);
  };
  return { loading, error, helperText, onLogin };
};
