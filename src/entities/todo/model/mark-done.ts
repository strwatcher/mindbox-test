import { Todo } from "./todo";

export function markTodoDone(todos: Todo[], todoId: string): Todo[] {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: true } : todo,
  );
}
