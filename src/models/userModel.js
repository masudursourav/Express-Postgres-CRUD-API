import pool from '../config/db.js';

export const getAllUsersService = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        throw error;
    }
    }

export const getUserByIdService = async (userId) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}
export const createUserService = async (user) => {
    try {
        const { name, email } = user;
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}
export const updateUserService = async (userId, user) => {
    try {
        const { name, email } = user;
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, userId]);
        return result.rows[0];
    } catch (error) { 
        throw error;
    }
}
export const deleteUserService = async (userId) => {
    try {
       const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}