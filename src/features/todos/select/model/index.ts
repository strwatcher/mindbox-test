import { useState } from "react";

export type TodosListVariant = "all" | "done" | "undone";

export function useSelectTodos() {
  const [currentList, setCurrentList] = useState<TodosListVariant>("all");

  const selectList = {
    all: () => setCurrentList("all"),
    undone: () => setCurrentList("undone"),
    done: () => setCurrentList("done"),
  };

  return { currentList, selectList };
}
