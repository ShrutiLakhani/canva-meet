import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import postReducer from "./features/post/postSlice";
import filterReducer from "./features/filterSlice";
import allPostsReducer from "./features/allPostsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    filter: filterReducer,
    allPosts: allPostsReducer,
  },
});
