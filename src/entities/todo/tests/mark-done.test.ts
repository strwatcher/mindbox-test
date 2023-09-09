import { expect, test } from "vitest";
import { markTodoDone } from "../model";
import { markDoneUndoneTodoInTodoListResult, todoList } from "./mock-data";

test("mark done existing undone todo", () => {
  expect(markTodoDone(todoList, todoList[0].id)).toStrictEqual(
    markDoneUndoneTodoInTodoListResult,
  );
});

test("mark done existing done todo", () => {
  expect(markTodoDone(todoList, todoList[1].id)).toStrictEqual(todoList);
});

test("mark done non existing todo", () => {
  expect(markTodoDone(todoList, "123")).toStrictEqual(todoList);
});
