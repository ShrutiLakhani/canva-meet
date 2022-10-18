import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, follow, unfollow } from "./userThunk";
const initialState = {
  users: [],
  visitingUsers: {
    followers: [],
    following: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        console.log("error");
      });
  },
});

export default userSlice.reducer;
