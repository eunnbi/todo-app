import { useState } from "react";
import { signIn } from "../../../api/auth";
import { AuthState } from "../../../types/auth";

export const useLogin = ({ email }: AuthState) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (email === "") {
      setError(true);
      setHelperText("이메일을 입력해주세요!");
    }
    const { error } = await signIn({ email });
    if (error) {
      setError(true);
      setHelperText("이메일을 다시 입력해주세요.");
    } else {
      console.log("success");
      setError(false);
      setHelperText("이메일에서 로그인 링크를 확인해주세요 :)");
    }
    setError(false);
    setLoading(false);
  };
  return { loading, error, helperText, onLogin };
};
