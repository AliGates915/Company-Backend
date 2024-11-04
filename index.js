// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import companyRoutes from './routes/companyRoutes.js'
import headRoutes from './routes/head.js'
import subHeadRoutes from './routes/subHead.js'
import accountRoutes from './routes/accountHead.js'
import cors from 'cors';

// Configure environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(cors({
    origin: ['https://company-frontend-2.vercel.app/','http://localhost:3000'], // Replace with your frontend origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // credentials: true, 
  }));

  app.use(express.json());
// MongoDB connection function
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error.message);
      throw new Error("Failed to connect to MongoDB");
    }
  };
  
  // MongoDB connection 
  connect();

// Define a simple route
app.use('/api/companies', companyRoutes);
app.use('/api/heads', headRoutes);
app.use('/api/subHead',  subHeadRoutes);
app.use('/api/accountHead', accountRoutes)


app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
