import { expect, test } from "vitest";
import { getUndoneTodos } from "../model";
import {
  emptyTodoList,
  getUndoneFromTodoListResult,
  todoList,
  todoListWithOnlyDone,
  todoListWithOnlyUndone,
} from "./mock-data";

test("get undone tasks from empty list", () => {
  expect(getUndoneTodos([])).toStrictEqual([]);
});

test("get undone tasks from list with only done tasks", () => {
  expect(getUndoneTodos(todoListWithOnlyDone)).toStrictEqual(emptyTodoList);
});

test("get done tasks from list with only undone tasks", () => {
  expect(getUndoneTodos(todoListWithOnlyUndone)).toStrictEqual(
    todoListWithOnlyUndone,
  );
});

test("get done tasks from list with both done and undone tasks", () => {
  expect(getUndoneTodos(todoList)).toStrictEqual(getUndoneFromTodoListResult);
});
