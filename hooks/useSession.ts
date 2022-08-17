import { useEffect } from "react";
import { useRecoilState } from "recoil";
import sessionState from "../store/session";
import { supabase } from "../utils/supabase";

export const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    const data = supabase.auth.session();
    setSession(data);
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      setSession(session);
    });
  }, []);
  return { session };
};
