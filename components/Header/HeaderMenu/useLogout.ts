import { signOut } from "../../../api/auth";

export const useLogout = () => {
  const onLogout = () => {
    signOut();
  };
  return onLogout;
};
