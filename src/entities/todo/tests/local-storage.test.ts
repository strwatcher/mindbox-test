import { expect, test } from "vitest";
import { MockLocalStorage } from "./mock-local-storage";
import {
  getTodosFromLocalStorageFx,
  saveTodosToLocalStorageFx,
} from "../model";
import { todoList, todoListWithOnlyDone } from "./mock-data";

test("add 1 todo in undefined localstorage[todos] and get it from there", () => {
  const ls = new MockLocalStorage();
  const addedTodo = todoList[0];

  saveTodosToLocalStorageFx([addedTodo], { ls });
  const todosFromLocalStorage = getTodosFromLocalStorageFx({ ls });
  expect(todosFromLocalStorage).toStrictEqual([addedTodo]);
});

test("add todolist in undefined localstorage[todos] and get it from there", () => {
  const ls = new MockLocalStorage();
  saveTodosToLocalStorageFx(todoList, { ls });
  const todosFromLocalStorage = getTodosFromLocalStorageFx({ ls });
  expect(todosFromLocalStorage).toStrictEqual(todoList);
});

test("do 2 updates of localstorage[todos] and get todos from there", () => {
  const ls = new MockLocalStorage();
  saveTodosToLocalStorageFx(todoList, { ls });
  expect(getTodosFromLocalStorageFx({ ls })).toStrictEqual(todoList);
  saveTodosToLocalStorageFx(todoListWithOnlyDone, { ls });
  expect(getTodosFromLocalStorageFx({ ls })).toStrictEqual(
    todoListWithOnlyDone,
  );
});

test("get todos from undfined localstorage[todos]", () => {
  const ls = new MockLocalStorage();
  expect(getTodosFromLocalStorageFx({ ls })).toBe(null);
});
