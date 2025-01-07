import express from "express";
import { emailContoller } from "../controllers/EmailController.js"

const router = express.Router();

// Define the route for handling the email contact
router.post("/contact", emailContoller);

export default router;
