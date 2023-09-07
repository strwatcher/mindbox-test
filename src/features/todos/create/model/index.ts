import { FormEvent, useState } from "react";
import { z } from "zod";

export function useTodoInput(onAdd: (value: string) => void) {
  const [todoText, setTodoText] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = z.string().min(1).safeParse(todoText);
    if (!parsed.success) return;
    onAdd(todoText);
    setTodoText("");
  };

  return { todoText, setTodoText, submit };
}
