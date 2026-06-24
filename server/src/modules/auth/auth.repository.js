import User from './auth.model.js';

export const findByEmail = async (email) => {
    console.log(`[AuthRepository] findByEmail: search email ${email}`);
    return await User.findOne({ email })
};

export const findByUsername = async (username) => {
    console.log(`[AuthRepository] findByUsername: search user ${username}`);
    return await User.findOne({ username });    
};

export const createUser = async (userData) => {
    console.log(`[AuthRepository] createUser: user saved sucessful ${userData.email}`);
    return await User.create(userData)  
};