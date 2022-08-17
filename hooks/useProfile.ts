import { useEffect } from "react";
import { getProfile } from "../api/profile";
import { useRecoilState } from "recoil";
import { profileState } from "../store/profile";

export const useProfile = (
  id: string | undefined,
  email: string | undefined
) => {
  const [profile, setProfile] = useRecoilState(profileState);
  const getUserProfile = async (id: string) => {
    const { data, error } = await getProfile({ id });
    if (error) {
      if (email === undefined) return;
      setProfile({
        id,
        username: email.split("@")[0],
      });
    } else {
      setProfile(data);
    }
  };
  useEffect(() => {
    if (id !== undefined) {
      getUserProfile(id);
    }
  }, [id]);
  return { profile };
};
