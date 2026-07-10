import jwt from 'jsonwebtoken';
import * as authRepository from '../../src/modules/auth/auth.repository.js';
import { UnauthorizedError } from '../errors/AppError.js';

export const protectRoute = async (req, res, next) => {
   try{
    //1. get token from header 'Authorization'
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log(`[authMiddleware] No token provided in the request header`);
        return next(new UnauthorizedError('No token provided in the request header'));
    }

    //Extraer solo el token (despues de 'bearer')
    const token = authHeader.split(' ')[1];

    //2. Verifica el token con la clave secreta
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`[AuthMiddleware] Token decodificado para usuario ID: ${decodedPayload.id}`);


    //3. Buscar el usuario por en la base de datos por su id numerico 
    const user = await authRepository.findById(decodedPayload.id);
    if (!user) {
        console.log(`[AuthMiddleware] Usuario no encontrado con ID ${decodedPayload.id}`);
        return next(new UnauthorizedError('Usuario no encontrado.'))
    }

    //4. Adjunto el usuario al objeto request para usarlo en los controladores 
    req.user = user;

    //5. pasar al siguiente 
    next();
   } catch (error) {
    console.error(`[authMiddleware] Error in protectRoute middleware:`, error.message);

    // si el error es el del token (expirado, mal formado)
    if (error instanceof jwt.JsonWebTokenError) {
        return next(new UnauthorizedError('Invalid token'));
    };

    next(error); // Pass the error to the next middleware (error handler)
   }
};

