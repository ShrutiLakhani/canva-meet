import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { createPost, getPosts } from "./postThunk";

const initialState = {
  posts: [],
  loading: false,
  userPost: [],
  singlePost: "",
  comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log("Error");
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log(action);
      });
  },
});
export default postSlice.reducer;
