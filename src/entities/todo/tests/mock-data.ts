import { Todo } from "../model";

export const emptyTodoList = [];

export const todoListWithOnlyDone: Todo[] = [
  { id: "1", done: true, text: "done1" },
  { id: "2", done: true, text: "done2" },
];

export const todoListWithOnlyUndone: Todo[] = [
  { id: "1", done: false, text: "undone1" },
  { id: "2", done: false, text: "undone2" },
];

export const todoList: Todo[] = [
  { id: "1", done: false, text: "undone1" },
  { id: "2", done: true, text: "done1" },
];

export const getDoneFromTodoListResult: Todo[] = [
  { id: "2", done: true, text: "done1" },
];

export const getUndoneFromTodoListResult: Todo[] = [
  { id: "1", done: false, text: "undone1" },
];

export const markDoneUndoneTodoInTodoListResult = [
  { id: "1", done: true, text: "undone1" },
  { id: "2", done: true, text: "done1" },
];

export const markUndoneDoneTodoInTodoListResult = [
  { id: "1", done: false, text: "undone1" },
  { id: "2", done: false, text: "done1" },
];
