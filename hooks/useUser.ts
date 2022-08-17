import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import sessionState from "../store/session";
import userState from "../store/user";
import { supabase } from "../utils/supabase";

export const useUser = () => {
  const session = useRecoilValue(sessionState);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
  }, [session]);
  return { user };
};
