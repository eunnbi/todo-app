import { ProfileState } from "../types/profile";
import { supabase } from "../utils/supabase";

export const getProfile = async ({ id }: Pick<ProfileState, "id">) => {
  const result = await supabase
    .from("profiles")
    .select("username")
    .eq("id", id)
    .single();
  return result;
};

export const updateProfile = async ({ id, username }: ProfileState) => {
  const updates = {
    id,
    username,
    updated_at: new Date(),
  };
  const result = await supabase.from("profiles").upsert(updates);
  return result;
};
