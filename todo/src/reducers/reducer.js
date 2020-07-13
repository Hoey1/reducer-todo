import React from "react";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
  tags: ["reducers", "react", "lambda"],
};
//
// Reducer always takes in (state, action)
export const reducer = (state, action) => {
  const newState = [...state];

  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.newItem,
          completed: false,
          id: Date.now(),
          tags: action.tags.split(","),
        },
      ];
    case "TOGGLE_TODO":
      newState[action.payload] = {
        ...newState[action.payload],
        completed: !newState[action.payload].completed,
      };
      return newState;
    case "CLEAR_COMPLETED":
      const filteredArray = newState.filter((todo) => {
        return !todo.completed;
      });
      return filteredArray;
    default:
      return newState;
  }
};

// SUBMIT

// COMPLETED

// CLEAR
