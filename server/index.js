import express from 'express';
import connectDB from './db/db.js'; // Import database connection
import ProjectRouters from './routers/ProjectRouters.js'; // Import project routes
import CertificateRouters from './routers/CertificateRouters.js'; // Import certificate routes
import BlogRouters from './routers/BlogRouters.js'; // Import blog routes
import dotenv from 'dotenv'; // Import dotenv to use environment variables
import cors from 'cors'; // Import CORS

const app = express();
dotenv.config(); // Load environment variables from .env file

// Configure CORS options
const corsOptions = {
  origin: ['http://localhost:5173', 'http://another-origin.com'], // Array of allowed origins
  methods: ['GET', 'POST'],
  credentials: true, // Allow credentials such as cookies
};

// Apply the CORS middleware with the configured options
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON request body

// Routes
app.use('/api/projects', ProjectRouters);
app.use('/api/certificates', CertificateRouters);
app.use('/api/blogs', BlogRouters);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

