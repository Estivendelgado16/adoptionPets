// base class for all errors operation of our app
export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; //is a error controlled by us

        Error.captureStackTrace(this, this.constructor);
    };
};


// error 400: for invalid input data, missing or duplicate fields
export class BadRequestError extends AppError {
    constructor(message = 'Invalid request') {
        super(message, 400)
    };
};

// Error 401: For authentication issues or invalid credentials
export class UnauthorizedError extends AppError {
    constructor(message = 'Inauthorized') {
        super(message, 401);
    };
};

// Error 404: For when a resorce (pet. history, etc) cannot be found
export class NotFoundError extends AppError {
    constructor(message = 'resorce not found') {
        super(message, 404);
    };
};


