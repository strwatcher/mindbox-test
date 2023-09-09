import { expect, test } from "vitest";
import { getDoneTodos } from "../model";
import {
  emptyTodoList,
  getDoneFromTodoListResult,
  todoList,
  todoListWithOnlyDone,
  todoListWithOnlyUndone,
} from "./mock-data";

test("get done tasks from empty list", () => {
  expect(getDoneTodos([])).toStrictEqual([]);
});

test("get done tasks from list with only done tasks", () => {
  expect(getDoneTodos(todoListWithOnlyDone)).toStrictEqual(
    todoListWithOnlyDone,
  );
});

test("get done tasks from list with only undone tasks", () => {
  expect(getDoneTodos(todoListWithOnlyUndone)).toStrictEqual(emptyTodoList);
});

test("get done tasks from list with both done and undone tasks", () => {
  expect(getDoneTodos(todoList)).toStrictEqual(getDoneFromTodoListResult);
});
