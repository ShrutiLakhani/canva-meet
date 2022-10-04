import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  createPost,
  getPosts,
  deletePost,
  likePost,
  dislikePost,
  addToBookmarks,
  removeFromBookmarks,
  addComment,
  getComments,
} from "./postThunk";

const initialState = {
  posts: [],
  loading: false,
  userPost: [],
  singlePost: "",
  comments: [],
  bookmarks: [],
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
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.rejected, (state, action) => {
        console.log("error", action);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(likePost.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(dislikePost.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(addToBookmarks.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeFromBookmarks.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(addComment.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(getComments.rejected, (state, action) => {
        console.log("error");
      });
  },
});
export default postSlice.reducer;
