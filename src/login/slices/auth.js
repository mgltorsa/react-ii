import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    autenticado: false,
  },
  reducers: () => ({
    login: () => {},
    logout: () => {},
  }),
});

export default authSlice;
export const { login } = authSlice.actions;
