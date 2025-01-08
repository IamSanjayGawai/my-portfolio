import { createAsyncThunk } from "@reduxjs/toolkit";
import { makecontact } from "../../api/contactApi.js";


export const makecontactThunk = createAsyncThunk(
    "contact/make",
    async (formdata, { rejectWithValue }) => {
      try {
        console.log("working thunk")
        const data = await makecontact(formdata);
        return data;
      } catch (error) {
        return rejectWithValue(error.message || "Something went wrong");
      }
    }
  );