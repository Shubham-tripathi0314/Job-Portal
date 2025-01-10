import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS options
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://job-portal-nine-theta.vercel.app'
    : 'http://localhost:3000',  // Local development URL
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000; // Default port if not set

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  
