import { Todo } from "./todo";

export function getDoneTodos(todos: Todo[]): Todo[] {
  return todos.filter((todo) => todo.done);
}
