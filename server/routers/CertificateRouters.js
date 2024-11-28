import express from 'express';
import { createCertificate, getCertificate } from '../controllers/CertificateController.js';
import upload from '../utils/multer.js';

const router = express.Router();

// Route for creating a new certificate
router.post("/add-certificate", upload, createCertificate);
router.get("/get-certificate", getCertificate);

export default router;