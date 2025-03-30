import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors);

// Routes


// Error Handling


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});