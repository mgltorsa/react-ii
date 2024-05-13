import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoListSlice = createSlice({
  initialState,
  name: "todoList",
  reducers: {
    ADD: (state, action) => {
      const newTodo = action.payload;
      state.todoList.push(newTodo);
    },
    REMOVE: () => {},
    // (state, action) => {
    //     switch(action.type)
    // case "ADD":,
    //     return newState
    // case "REMOVE":
    //      return newState
    // }
  },
});

export default todoListSlice.reducer;

export const actions = todoListSlice.actions;
