import axios from "axios";
import { bookmarkActions } from "./bookMarkSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToBookmarks = createAsyncThunk(
  "post/addToBookmarks",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: getState().auth.token },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
