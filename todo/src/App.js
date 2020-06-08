import React, { useState, useReducer } from "react";
import Form from "./components/TodoForm";
import List from "./components/TodoList";

const todolist = [
  {
    task: "Get Shit Done",
    id: 3892987589,
    completed: false,
  },
];

function App() {
  const onFocus = (event) => {
    event.target.placeholder = "";
  };

  const onBlur = (event) => {
    event.target.placeholder = "Add To-Do's";
  };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <Form onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
}

export default App;
