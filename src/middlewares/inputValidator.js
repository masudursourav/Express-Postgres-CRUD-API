import Joi from 'joi';

const UserSchema = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    email: Joi.string().email().required(),
});

export const validateUser = (req, res, next) => {
    const { error } = UserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: '400',
            message: 'Bad Request',
            error: error.details[0].message,
        });
    }
    next();
}   