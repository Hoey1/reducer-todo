import React, { useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";
import Item from "./Todo";

const todolist = {
  list: [
    {
      task: "Get Shit Done",
      id: 3892987589,
      completed: false,
    },
  ],
};

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, todolist);
  const [newTask, setNewTask] = useState({
    task: "",
    id: Date.now(),
    completed: false,
  });

  const onInputChange = (event) => {
    setNewTask({ ...newTask, task: event.target.value });
  };

  return (
    <div className="container">
      <div className="list">
        {state.list.map((item) => {
          return (
            <Item key={item.id} item={item} state={state} dispatch={dispatch} />
          );
        })}
      </div>
      <form>
        <input
          id="newtask"
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onChange={onInputChange}
          name="task"
          type="text"
          placeholder="Add To-Do's"
        />
        <button
          id="submit"
          onClick={(event) => {
            dispatch({ type: "SUBMIT", payload: newTask });
            event.preventDefault();
            document.querySelector("#newtask").value = "";
            console.log(state);
          }}
        >
          Add!
        </button>
        <button
          id="clear"
          onClick={(event) => {
            event.preventDefault();
            const notcomp = [];
            state.list.map((item) => {
              console.log(item);
              if (item.completed === false) {
                notcomp.push(item);
              }
            });
            dispatch({ type: "CLEAR", payload: notcomp });
            console.log(state);
          }}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default Form;
