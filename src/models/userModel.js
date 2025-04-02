import pool from '../config/db.js';

export const getAllUsersService = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        throw error;
    }
    }

export const getUserByIdService = async (userId) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}
export const createUserService = async (user) => {
    try {
        const { name, email } = user;
        const [result] = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        return { id: result.insertId, name, email };
    } catch (error) {
        throw error;
    }
}
export const updateUserService = async (userId, user) => {
    try {
        const { name, email } = user;
        await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, userId]);
        return { id: userId, name, email };
    } catch (error) { 
        throw error;
    }
}
export const deleteUserService = async (userId) => {
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [userId]);
        return { id: userId };
    } catch (error) {
        throw error;
    }
}