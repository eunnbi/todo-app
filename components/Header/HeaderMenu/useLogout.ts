import { signOut } from "../../../api/auth";

export const useLogout = () => {
  const onLogout = () => {
    signOut();
    window.location.reload();
  };
  return onLogout;
};
