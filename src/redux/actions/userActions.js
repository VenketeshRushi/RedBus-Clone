import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { successToast } from "../../utils/toast";

export const loginAPI = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/login", data);
      const { jwttoken, userid } = response.data;

      Cookies.set("jwttoken", jwttoken, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
        secure: false,
        sameSite: "strict",
        httpOnly: true,
      });
      Cookies.set("userid", userid, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
        secure: false,
        sameSite: "strict",
        httpOnly: true,
      });
      successToast("Welcome!");
      return response.data;
    } catch (error) {
      // If the request fails, return the error response
      return rejectWithValue(error.response.data);
    }
  }
);
