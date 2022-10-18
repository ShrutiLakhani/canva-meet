import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import postReducer from "./features/post/postSlice";
import filterReducer from "./features/filterSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    filter: filterReducer,
    user: userReducer,
  },
});
