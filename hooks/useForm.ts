import React, { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState(initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const initialize = () => {
    setForm(initialState);
  };

  return { form, onChange, initialize };
};
