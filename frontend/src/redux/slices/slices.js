import { createSlice } from "@reduxjs/toolkit";
import { createProjectThunk, getAllProjectsThunk, deleteProjectsThunk } from "../thunks/projectThunk";
import { addCertificateThunk, getCertificateThunk } from "../thunks/certificateThunk";
import { addBlogThunk, getBlogThunk, getBlogByIdThunk } from "../thunks/blogThunk";
import { makecontactThunk } from "../thunks/contactThunk";

const initialState = {
  projects: [],
  certificates: [],
  blog: [],
  singleBlog: {},
  loading: false,
  error: null,
  contact:[]
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProjectThunk.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on a new request
      })
      .addCase(createProjectThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload); // Add the new project
      })
      .addCase(createProjectThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || "Failed to create project";
      });

    builder.addCase(getAllProjectsThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProjectsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(getAllProjectsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to fetch projects";
    });

    builder.addCase(addCertificateThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCertificateThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.certificates.push(action.payload);
    });
    builder.addCase(addCertificateThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to add certificate";
    });

    builder.addCase(getCertificateThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCertificateThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.certificates = action.payload;
    });
    builder.addCase(getCertificateThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to fetch certificates";
    });

    builder.addCase(addBlogThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addBlogThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    });
    builder.addCase(addBlogThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to add blog";
    });

    builder.addCase(getBlogThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBlogThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    });
    builder.addCase(getBlogThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to fetch blogs";
    });

    builder.addCase(getBlogByIdThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBlogByIdThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.singleBlog = action.payload;
    });
    builder.addCase(getBlogByIdThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to fetch blog";
    });

    builder.addCase(deleteProjectsThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProjectsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(deleteProjectsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to delete project";
    });

    builder.addCase(makecontactThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(makecontactThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(makecontactThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error?.message || "Failed to create contact";
    });
  },
});

export const selectProjects = (state) => state.project.projects;
export const selectCertificates = (state) => state.project.certificates;
export const selectBlog = (state) => state.project.blog;
export const selectSingleBlog = (state) => state.project.singleBlog;

export default projectSlice.reducer;
