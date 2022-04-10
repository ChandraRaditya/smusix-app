import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./pages/login/tokenSlice"
import loginReducer from "./pages/login/slice"

export default configureStore({
    reducer: {
        token: tokenReducer,
        login: loginReducer
    }
});
