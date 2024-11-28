import { createAsyncThunk } from '@reduxjs/toolkit';
import { createProject, getProjects, deleteProjects } from '../../api/projectApi'; // Your API function

// The createProjectThunk for dispatching the project creation request
export const createProjectThunk = createAsyncThunk(
  "project/add",
  async (project, { rejectWithValue }) => { 
    try {
      const data = await createProject(project);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const getAllProjectsThunk = createAsyncThunk(
  "project/get-all",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProjects();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const deleteProjectsThunk = createAsyncThunk(
  "project/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteProjects(id);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
