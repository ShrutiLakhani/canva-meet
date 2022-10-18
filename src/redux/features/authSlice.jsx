import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { follow, unfollow } from "./user/userThunk";

const initialState = {
  user: JSON.parse(localStorage.getItem("canva.user")) || "",
  token: localStorage.getItem("canva.token") || "",
  isSuccess: "",
};

export const userLogin = createAsyncThunk(
  "auth/login",

  async (logindata, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: logindata.username,
        password: logindata.password,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userSignup = createAsyncThunk(
  "auth/signup",
  async (signUpData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: signUpData.username,
        password: signUpData.password,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.user = "";
      state.token = "";
      localStorage.removeItem("canvalink.user");
      localStorage.removeItem("canvalink.token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("canvalink.token", action.payload.encodedToken);
        localStorage.setItem(
          "canvalink.user",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userLogin.rejected, (state, action) => {})
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("canvalink.token", action.payload.encodedToken);
        localStorage.setItem(
          "canvalink.user",
          JSON.stringify(action.payload.createdUser)
        );
      })
      .addCase(follow.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(follow.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(unfollow.rejected, (state, action) => {
        console.log("error");
      });
  },
});
export const { userLogout } = authSlice.actions;
export default authSlice.reducer;
