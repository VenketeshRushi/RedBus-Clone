import { createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./actions/userActions";

const initialState = {
  token: "",
  isAuthenticated: "",
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
      loading = false;
    },
    extraReducers: {
      [loginAPI.pending]: (state, action) => {
        console.log("action: " + action.payload)
      },
      [loginAPI.fulfilled]: (state, action) => {
        console.log("action: " + action.payload)
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
