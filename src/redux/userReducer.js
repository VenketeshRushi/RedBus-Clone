import { createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./actions/userActions";

const initialState = {
  token: "",
  isAuthenticated: false,
  userid: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.userid = action.payload.userid;
    },
    removeUserData: (state, action) => {
      state.token = "";
      state.isAuthenticated = false;
      state.userid = "";
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAPI.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.token = action.payload.jwttoken;
        state.isAuthenticated = true;
        state.loading = false;
        state.userid = action.payload.userid;
      })
      .addCase(loginAPI.rejected, (state, action) => {
        state.token = "";
        state.isAuthenticated = false;
        state.userid = "";
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { saveUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
