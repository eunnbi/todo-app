import { MdOutlineEdit } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "./useLogout";

export const MENUS = [
  {
    menu: "이름 수정하기",
    icon: <MdOutlineEdit />,
    onClick: null,
  },
  {
    menu: "로그아웃",
    icon: <FiLogOut />,
    onClick: useLogout(),
  },
];
