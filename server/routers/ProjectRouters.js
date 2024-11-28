import express from 'express';
import { createProject, getProjects, deleteProject } from '../controllers/ProjectController.js';
import upload from '../utils/multer.js';


const router = express.Router();

// Route for creating a new project
router.post('/',upload, createProject);
router.get('/get-projects', getProjects);
router.post('/delete-project/:id', deleteProject);

export default router;
