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


// Método adicional para buscar usuario por ID numérico
export const findById = async (id) => {
    console.log(`[AuthRepository] findById: buscando usuario con ID ${id}`);
    // Buscamos usando el campo 'id' numérico que definimos en el schema
    return await User.findOne({ id: Number(id) }); 
};