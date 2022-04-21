import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import loginReducer from "./loginSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
  },
});
