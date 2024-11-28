import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCertificate, getCertificate } from "../../api/certificateApi.js";

// Add Certificate Thunk
export const addCertificateThunk = createAsyncThunk(
  "certificate/add",
  async (certificate, { rejectWithValue }) => {
    try {
      const data = await addCertificate(certificate);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Get Certificate Thunk
export const getCertificateThunk = createAsyncThunk(
  "certificate/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCertificate();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
