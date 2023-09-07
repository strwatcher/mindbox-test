import {
  Todo,
  addTodo,
  getDoneTodos,
  getTodosFromLocalStorageFx,
  getUndoneTodos,
  markTodoDone,
  markTodoUndone,
  saveTodosToLocalStorageFx,
} from "@/entities/todo";
import { useLayoutEffect, useState } from "react";

export function useTodos() {
  const [todos, _setTodos] = useState<Todo[]>([]);

  const setTodos = (todos: Todo[]) => {
    _setTodos(todos);
    saveTodosToLocalStorageFx(todos);
  };

  const done = getDoneTodos(todos);
  const undone = getUndoneTodos(todos);
  const all = undone.concat(done);

  const markDone = (id: string) => {
    setTodos(markTodoDone(all, id));
  };

  const markUndone = (id: string) => {
    setTodos(markTodoUndone(all, id));
  };

  const add = (text: string) => {
    setTodos(addTodo(all, text));
  };

  const clearDone = () => {
    setTodos(undone);
  };

  useLayoutEffect(() => {
    const todos = getTodosFromLocalStorageFx();

    if (!todos) return;

    _setTodos(todos);
  }, []);

  return {
    all,
    done,
    undone,
    markDone,
    markUndone,
    clearDone,
    add,
  };
}
