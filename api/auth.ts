import { AuthState } from "../types/auth";
import { supabase } from "../utils/supabase";

export const signIn = async ({ email }: AuthState) => {
  const result = await supabase.auth.signIn({
    email,
  });
  return result;
};

export const signOut = async () => {
  const result = await supabase.auth.signOut();
  return result;
};
