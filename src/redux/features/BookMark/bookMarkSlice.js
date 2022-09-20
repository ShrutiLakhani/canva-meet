import { createSlice } from "@reduxjs/toolkit";
import { addToBookmarks } from "./bookmarkThunk";

const initialState = {
  bookmarks: [],
};

const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToBookmarks.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
  },
});

export default bookMarkSlice.reducer;
