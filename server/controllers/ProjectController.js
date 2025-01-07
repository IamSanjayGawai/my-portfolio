import Project from "../models/ProjectModel.js";
import mongoose from "mongoose";

export const createProject = async (req, res) => {
    try {
        const { name, github_link, live_link, type, stack, description } = req.body;


        let base64Image = null;
        if(req.file){
            base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        }
        console.log("Base64 image poject:", base64Image);

        const project = new Project({
            name,
            github_link,
            live_link,
            type,
            stack,
            description,
            image: base64Image,
        });


        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProjects = async (req, res) => {
    try{
const  project = await Project.find();

res.status(200).json(project);
    }
    catch(error){
        res.status(500).json({ message: "Failed to fecth project.", error: error.message });
    }
}



export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params; // Extract `id` from route parameters

    // Validate the ID
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid or missing project ID." });
    }

    // Check if the project exists
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    // Delete the project
    await Project.findByIdAndDelete(id);

    res.status(200).json({ message: "Project deleted successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project.",
      error: error.message,
    });
  }
};
