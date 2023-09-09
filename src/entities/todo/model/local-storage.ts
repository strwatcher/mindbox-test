import { MockLocalStorage } from "../tests/mock-local-storage";
import { Todo, TodosContract } from "./todo";

export function saveTodosToLocalStorageFx(
  todos: Todo[],
  opts?: { ls: MockLocalStorage },
) {
  opts?.ls
    ? opts.ls.setItem("todos", JSON.stringify(todos))
    : localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodosFromLocalStorageFx(opts?: { ls: MockLocalStorage }) {
  const todosNotParsed = opts?.ls
    ? opts.ls.getItem("todos")
    : localStorage.getItem("todos");

  if (!todosNotParsed) return null;

  const todos = TodosContract.optional().safeParse(JSON.parse(todosNotParsed));
  if (!todos.success || todos.data === undefined) return null;

  return todos.data;
}
