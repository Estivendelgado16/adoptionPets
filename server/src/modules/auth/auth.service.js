import bcrypt from 'bcryptjs';
import * as authRepository from './auth.repository.js';

// register user
export const registerUser = async ({ username, email, phone, password}) => {
    console.log(`[AuthService] registerUser: trying register a ${email}`);

    // verify if email exist
    const existingEmail = await authRepository.findByEmail(email);
    if (existingEmail) {
        console.log(`[AuthService] registerUser: email ${email} It is already in use`);
        throw new Error("The email address is already registered.");
    }

    // verify if the  username exist
    const existingUsername = await authRepository.findByUsername(username);
    if (existingUsername) {
        console.log(`[AuthService] registerUser: user ${username} it's already in use`);
        throw new Error("the username is already in use");
        
    }

    // Encrypt the password (hashing)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Saved new user in dataBase
    const newUser = await authRepository.createUser({
        username,
        email,
        phone,
        password: hashedPassword //saved password encrypt
    });

    console.log(`[AuthService] register: register sucessfull for ${email}`);

    // return the user but without password
    const userResponse = newUser.toJSON();
    delete userResponse.password;
    return userResponse;
};

//Login users
export const loginUser = async (email, password) => {
    console.log(`[AuthService] loginUser: trying login to ${email}`);

    // search if user existing 
    const user = await authRepository.findByEmail(email);
    if(!user) {
        console.log(`[AuthService] loginUser: user ${email} not found`);
        throw new Error("Incorrect credentials.");
    };

    //Compare the entered password with the hash in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log(`[AuthService] loginUser: incorrect password for ${email}`);
        throw new Error("incorect credentials");
        
    }

    console.log(`[AuthService] loginUser: login sucessfull for ${email}`);

    //return user without password
    const userResponse = user.toJSON();
    delete userResponse.password;
    return userResponse;
};



