import { Todo } from "./todo";

export function markTodoUndone(todos: Todo[], todoId: string): Todo[] {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: false } : todo,
  );
}
