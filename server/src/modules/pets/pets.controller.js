import * as petService from './pets.service.js';

export const getPets = async (req, res, next) => {
    try {
        const pets =  await petService.getAllPets();
        res.json(pets);
    } catch (err) {
        next(err);
    }
};

export const getPetById = async (req, res, next) => {
    try {
        const pet = await petService.getPetById(req.params.id);
        if (!pet) return res.status(404).json({ mesaage: 'Pet not found'});
        res.json(pet);
    } catch (err) {
        next(err);
    }
};

