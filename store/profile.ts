import { atom } from "recoil";
import { ProfileState } from "../types/profile";

export const profileState = atom<ProfileState>({
  key: "profileState",
  default: {
    id: "",
    username: "",
  },
});
