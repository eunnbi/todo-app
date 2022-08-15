import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initialState);
  const onToggle = () => setToggle((toggle) => !toggle);

  return [toggle, onToggle];
};
