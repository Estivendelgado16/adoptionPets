import { AppError } from '../errors/AppError.js';

export const errorHandler = (err, req, res, next) => {
    //log error for build backend
    console.log(`[ErrorHanlder] Error caught`, err)

    let error = { ...err};
    error.mensage = err.mensage;

    //1. Handle duplicate key error in MongoDB (Code 11000, e.g., email already registered)
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        const message = `The value for the field  '${field}' It is already registered `;
        return res.status(400).json({ status: 'fail', message });
    };

    //2. Handle Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message).join(', ');
        return res.status(400).json({ status: 'fail', message });
    }

    //3. Handle error of mongoose cast (exam: search by ID wrong structure)
    if (err.name === 'CastError') {
        const message = `Invalid value for the field '${err.path}': ${err.value}`;
        return res.status(400).json({ status: 'fail', message });
    }

    //4 If is a error controled by us (AppError)
    if (err instanceof AppError || err.isOperational) {
        return res.status(err.statusCode || 400).json({
            status: err.statusCode >= 500 ? 'error' : 'fail',
            message: err.message
        })
    }

    //5. error not controled (Bug of code, server down, etc)
    return res.status(500).json({
        status: 'error',
        message: 'Ocurrio un error inesperado'
    });
};