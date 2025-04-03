import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

const handleResponse = (res, statusCode, message, data=null) => {
    res.status(statusCode).json({
        status: statusCode,
        message: message,
        data: data
    });
    }

    export const createUser = async (req, res, next) => {
        try {
            const user = req.body;
            const newUser = await createUserService(user);
            handleResponse(res, 201, 'User created successfully', newUser);
        } catch (error) {
           next(error);
        }
    }

    export const getAllUsers = async (req, res, next) => {
        try {
            const users = await getAllUsersService();
            handleResponse(res, 200, 'Users retrieved successfully', users);
        } catch (error) {
            next(error);
        }
    };

    export const getUserById = async (req, res, next) => {
        try {
            const userId = req.params.id;
            const user = await getUserByIdService(userId);
            if (!user) {
                return handleResponse(res, 404, 'User not found');
            }
            handleResponse(res, 200, 'User retrieved successfully', user);
        } catch (error) {
            next(error);
        }
    }

    export const updateUser = async (req, res, next) => {
        try {
            const userId = req.params.id;
            const user = req.body;
            const updatedUser = await updateUserService(userId, user);
            if (!updatedUser) {
                return handleResponse(res, 404, 'User not found');
            }
            handleResponse(res, 200, 'User updated successfully', updatedUser);
        } catch (error) {
            next(error);
        }
    }

    export const deleteUser = async (req, res, next) => {
        try {
            const userId = req.params.id;
            const deletedUser = await deleteUserService(userId);
            if (!deletedUser) {
                return handleResponse(res, 404, 'User not found');
            }
            handleResponse(res, 200, 'User deleted successfully', deletedUser);
        } catch (error) {
            next(error);
        }
    }