import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBlog, getBlog, getBlogById } from "../../api/blogApi";

// Add Blog Thunk
export const addBlogThunk = createAsyncThunk(
  "blog/add",
  async (blog, { rejectWithValue }) => {
    try {
      const data = await addBlog(blog);
      console.log(data, "blog data");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Get Blogs Thunk
export const getBlogThunk = createAsyncThunk(
  "blog/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getBlog();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Get Blog by ID Thunk
export const getBlogByIdThunk = createAsyncThunk(
  "blog/getById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getBlogById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
