import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookMarkPosts: [],
};

const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setBookMarkData: (state, action) => {
      state.bookMarkPosts = action.payload;
    },
  },
});

const bookmarkActions = bookMarkSlice.actions;
export { bookmarkActions };
export default bookMarkSlice;
