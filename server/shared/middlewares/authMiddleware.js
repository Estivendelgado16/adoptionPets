import jwt from 'jsonwebtoken';
import * as authRepository from '../../src/modules/auth/auth.repository.js';
import { UnauthorizedError } from '../errors/AppError.js';

export const protectRoute = async (req, res, next) => {
   try{
    //1. get token from header 'Authorization'
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log(`[authMiddleware] No token provided in the request header`);
        return next(new UnauthorizedError('No token provided in the request header'));
    }

    req.user = user;

    next();
   } catch (error) {
    console.error(`[authMiddleware] Error in protectRoute middleware:`, error.menssage);

    if (error instanceof jwt.JsonWebTokenError) {
        return next(new UnauthorizedError('Invalid token'));
    }

    next(error); // Pass the error to the next middleware (error handler)
   }
}