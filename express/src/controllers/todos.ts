import { RequestHandler } from "express";
import { Todo } from "../modesl/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(200).json({ message: "TODOを作成しました", createTodo: newTodo });
};