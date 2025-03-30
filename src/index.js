import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import pool from './config/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes


// Error Handling


//Testing Postgres Connection
app.get('/', async(req, res) => {
  const result = await pool.query('SELECT current_database()');
  res.send(`The Database Name is ${result.rows[0].current_database}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});