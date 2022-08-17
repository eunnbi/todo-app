import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { updateProfile } from "../../../api/profile";
import { profileState } from "../../../store/profile";

export const useEditProfile = () => {
  const [loading, setLoading] = useState(false);
  const setProfile = useSetRecoilState(profileState);
  const editProfile = async (id: string, username: string) => {
    setLoading(true);
    const { data } = await updateProfile({ id, username });
    //console.log(data);
    if (data !== null) {
      setProfile(data[0]);
    }
    setLoading(false);
  };
  return { loading, editProfile };
};
