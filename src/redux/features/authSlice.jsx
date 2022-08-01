import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log(response);
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
      localStorage.removeItem("manalink.user");
      localStorage.removeItem("manalink.token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        // toastError("working");

        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("manalink.token", action.payload.encodedToken);
        localStorage.setItem(
          "manalink.user",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userLogin.rejected, (state, action) => {
        // toastError(action.payload.errors[0]);
        //       );
      });
  },
});
export const { userLogout } = authSlice.actions;
export default authSlice.reducer;
