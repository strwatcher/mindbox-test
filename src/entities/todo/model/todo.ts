import { z } from "zod";

export const TodoContract = z.object({
  id: z.string(),
  text: z.string(),
  done: z.boolean(),
});

export const TodosContract = z.array(TodoContract);

export type Todo = z.infer<typeof TodoContract>;
