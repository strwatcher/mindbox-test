import { v4 as uuid } from "uuid";
import { z } from "zod";

export const TodoContract = z.object({
  id: z.string(),
  text: z.string(),
  done: z.boolean(),
});

export const TodosContract = z.array(TodoContract);

export type Todo = z.infer<typeof TodoContract>;

export function addTodo(todos: Todo[], newTodo: string, id?: string): Todo[] {
  return todos.concat({ text: newTodo, done: false, id: id ?? uuid() });
}

export function markTodoDone(todos: Todo[], todoId: string): Todo[] {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: true } : todo,
  );
}

export function markTodoUndone(todos: Todo[], todoId: string): Todo[] {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: false } : todo,
  );
}

export function getDoneTodos(todos: Todo[]): Todo[] {
  return todos.filter((todo) => todo.done);
}

export function getUndoneTodos(todos: Todo[]): Todo[] {
  return todos.filter((todo) => !todo.done);
}

export function saveTodosToLocalStorageFx(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodosFromLocalStorageFx() {
  const todosNotParsed = localStorage.getItem("todos");
  if (!todosNotParsed) return null;

  const todos = TodosContract.optional().safeParse(JSON.parse(todosNotParsed));
  if (!todos.success || todos.data === undefined) return null;

  return todos.data;
}
