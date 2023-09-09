import { Todo } from "./todo";

export function getUndoneTodos(todos: Todo[]): Todo[] {
  return todos.filter((todo) => !todo.done);
}
