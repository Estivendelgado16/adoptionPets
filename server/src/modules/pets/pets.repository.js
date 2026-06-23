import Pet from './pets.model.js';

export const findAll = async () => Pet.find();
export const findById = async (id) => Pet.findOne({ id: Number(id) });