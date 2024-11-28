import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memoryStorage for Base64 conversion

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: limit file size to 5MB
}).single('image'); // Single file upload for 'image'

export default upload;
