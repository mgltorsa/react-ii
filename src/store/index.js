import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../slices/todoListSlice";

const store = configureStore({
  reducer: {
    todos: todoListReducer,
  },

  // (state, action) => {
  //     switch(action.type)
  // case "TODOS":,
  //          switch(action.type)
  //              case:"ADD"
  //                  return newState
  // case "OTRO-SLICE":
  //          switch(action.type)
  //              case:"ADD"
  //                  return newState
  // }
});

export default store;
