export const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, list: [...state.list, action.payload] };
    case "COMPLETED":
      return {
        ...state,
        list: [
          ...state.list,
          (action.payload.completed = !action.payload.completed),
        ],
      };
    case "CLEAR":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
