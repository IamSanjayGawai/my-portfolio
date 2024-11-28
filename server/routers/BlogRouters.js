import express from 'express';
import { createBlog, getBlog, getBlogById } from '../controllers/BlogController.js';
import  upload  from '../utils/multer.js';


const router = express.Router();

router.post("/add-blog", upload, createBlog);
router.get("/get-blog", getBlog);
router.get("/get-blog/:id", getBlogById);

export default router;