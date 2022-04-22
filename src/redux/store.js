import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import loginReducer from "./loginSlice";
import searchReduecer from "./searchSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
    search: searchReduecer,
  },
});
