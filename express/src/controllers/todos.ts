import { RequestHandler } from "express";
import { Todo } from "../modesl/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(200).json({ message: "TODOを作成しました", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = req.body.text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("対象のTODOが見つかりませんでした。");
  }
  TODOS[todoIndex] = new Todo(todoId, updateText);
  res
    .status(200)
    .json({ message: "TODOを更新しました", updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("対象のTODOが見つかりませんでした。");
  }

  TODOS.splice(todoIndex, 1);
  res.status(200).json({ message: "TODOを削除しました" });
};
