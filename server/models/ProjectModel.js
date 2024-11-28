import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    github_link: {
      type: String,
      required: true,
    },
    live_link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["WebApp", "Mobile App", "Game", "UI Design"],
      required: true,
    },
    stack: {
      type: [String], // Array of technologies
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
