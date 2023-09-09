import { expect, test } from "vitest";
import { markTodoUndone } from "../model";
import { markUndoneDoneTodoInTodoListResult, todoList } from "./mock-data";

test("mark undone existing done todo", () => {
  expect(markTodoUndone(todoList, todoList[1].id)).toStrictEqual(
    markUndoneDoneTodoInTodoListResult,
  );
});

test("mark undone existing undone todo", () => {
  expect(markTodoUndone(todoList, todoList[0].id)).toStrictEqual(todoList);
});

test("mark undone non existing todo", () => {
  expect(markTodoUndone(todoList, "123")).toStrictEqual(todoList);
});
