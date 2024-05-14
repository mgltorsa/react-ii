import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
  },
  reducers: (create) => ({
    login: create.asyncThunk(
      async (form) => {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const token = await response.json();
        //read user from token
        
        return token;
      },
      {
        fulfilled: (state, action) => {
          state.token = action.payload.token;
        },
        pending: (state) => {
          state.loading = true;
        },
      }
    ),
  }),
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
