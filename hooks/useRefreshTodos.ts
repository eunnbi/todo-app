import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { todoListQuery } from "../store/todo";
import userState from "../store/user";

export const useRefreshTodos = () => {
  const user = useRecoilValue(userState);
  const refreshTodos = useRecoilRefresher_UNSTABLE(todoListQuery(user?.id));
  return { refreshTodos };
};
