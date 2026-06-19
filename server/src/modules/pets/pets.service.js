import * as petRepository from './pets.repository.js'

export const getAllPets = async () => {
    return await petRepository.findAll();
};

export const getPetById = async (id) => {
    return await petRepository.findById(Number(id));
};

