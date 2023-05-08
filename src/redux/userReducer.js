import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    token: "",
    userid: "",
    isAuthenticated: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.data.firstname = action.payload.first;
      state.data.lastname = action.payload.last;
      state.data.token = action.payload.token;
      state.data.userid = action.payload.user_id;
      state.data.isAuthenticated = true;
    },

    resetUserData: (state) => {
      state.data.firstname = "";
      state.data.lastname = "";
      state.data.token = "";
      state.data.userid = "";
      state.data.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
