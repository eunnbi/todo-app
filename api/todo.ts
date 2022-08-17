import { TodoState } from "../types/todo";
import { supabase } from "../utils/supabase";

export const getTodos = async (userId: string) => {
  const result = await supabase
    .from("todos")
    .select()
    .match({
      user: userId,
    })
    .order("id");
  return result;
};

export const postTodo = async (text: string, userId: string) => {
  const result = await supabase.from("todos").insert([
    {
      text,
      done: false,
      user: userId,
    },
  ]);
  return result;
};

export const updateTodo = async ({ text, id, done }: TodoState) => {
  const result = await supabase
    .from("todos")
    .update([
      {
        text,
        done,
      },
    ])
    .match({ id });
  return result;
};

export const deleteTodo = async ({ id }: Pick<TodoState, "id">) => {
  const result = await supabase.from("todos").delete().match({ id });
  return result;
};
