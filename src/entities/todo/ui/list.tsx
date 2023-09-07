import { ReactNode } from "react";
import { Todo, TodoItem } from "..";

export type TodosListProps = {
  todos: Todo[];
  markDone: (id: string) => void;
  markUndone: (id: string) => void;
  empty: ReactNode;
};

export const TodosList = (props: TodosListProps) => {
  if (!props.todos.length) return props.empty;

  return (
    <>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={() => {
            if (todo.done) {
              props.markUndone(todo.id);
            } else {
              props.markDone(todo.id);
            }
          }}
        />
      ))}
    </>
  );
};
