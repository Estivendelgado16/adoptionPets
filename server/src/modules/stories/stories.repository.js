import Story from './stories.model.js';

export const findAll = async () => Story.find();
export const findById = async (id) => Story.findOne({ id: Number(id) });

 