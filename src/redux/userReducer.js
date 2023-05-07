import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuthenticated: "",
  userid: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterUpdateData: (state, action) => {
      state.updateData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { enterUpdateData } = userSlice.actions;

export default userSlice.reducer;
