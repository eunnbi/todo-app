import { useState } from "react";
export const useEditInput = () => {
  const [isEdit, setIsEdit] = useState(false);
  const showEditInput = () => setIsEdit(true);
  const notShowEditInput = () => setIsEdit(false);
  return { isEdit, showEditInput, notShowEditInput };
};
