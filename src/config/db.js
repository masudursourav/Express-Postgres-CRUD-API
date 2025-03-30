import dotenv from 'dotenv';
import pkg from 'pg';
dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

pool.on('connect',()=>{
    console.log('Connected to the database');
});

export default pool;