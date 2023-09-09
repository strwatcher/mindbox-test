import { expect, test } from "vitest";
import { addTodo } from "../model";
import { emptyTodoList } from "./mock-data";

test("add todo in empy todo list", () => {
  expect(addTodo(emptyTodoList, "test", "1")).toStrictEqual([
    { text: "test", done: false, id: "1" },
  ]);
});

test("add todo to list with existing todos", () => {
  expect(
    addTodo(
      [
        { id: "1", done: true, text: "test1" },
        { id: "2", done: true, text: "test2" },
      ],
      "test3",
      "3",
    ),
  ).toStrictEqual([
    { id: "1", done: true, text: "test1" },
    { id: "2", done: true, text: "test2" },
    { id: "3", done: false, text: "test3" },
  ]);
});
