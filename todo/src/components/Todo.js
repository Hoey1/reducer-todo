import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/reducer";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return <div></div>;
};

export default Todo;
