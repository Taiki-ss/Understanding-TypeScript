import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([todoTitle, ...todos]);
  };

  const deleteTodo = (e) => {
    const index = e.target.getAttribute("data-key");
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  return (
    <>
      <div className="form-wrapper" onSubmit={todoSubmitHandler}>
        <form className="form">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="New Todo"
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="todo-lists">
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <button data-key={index} onClick={deleteTodo}>
                  Del
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
