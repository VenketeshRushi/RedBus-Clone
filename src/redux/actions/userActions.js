import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAPI = createAsyncThunk("user", async (data) => {
  console.log("data", data);
  try {
    let response = await axios.post("http://localhost:8080/user/login", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
});
