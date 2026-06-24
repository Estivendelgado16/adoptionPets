import * as authService from './auth.service.js';

//register controller 
export const register = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;

        console.log(`[AuthController] register: register request for ${email}`);

        const user = await authService.registerUser({ username, email, phone, password});

        res.status(201).json(user);
    } catch (err) {
        console.error(`[AuthController] Error register: ${err.message}`);
        next(err);// send to middleware errors
    }
}


//login controller 
export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        console.log(`[AuthController] login: login request for ${email}`);

        const user = await authService.loginUser(email, password);

        //respond with status 200 and the user data loging
        res.json(user)
    } catch (err) {
        console.error(`[AuthController] login ERROR: ${err.message}`);
        next(err);
    };
};

