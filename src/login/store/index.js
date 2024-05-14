import { combineSlices, configureStore } from "@reduxjs/toolkit";
import auth from "../slices/auth";
import user from "../slices/user";


export const rootReducer = combineSlices(auth, user)

export default configureStore({
  reducer: {},
});
