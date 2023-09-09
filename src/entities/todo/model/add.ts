import { Todo } from "./todo";
import { v4 as uuid } from "uuid";

export function addTodo(todos: Todo[], newTodo: string, id?: string): Todo[] {
  return todos.concat({ text: newTodo, done: false, id: id ?? uuid() });
}
