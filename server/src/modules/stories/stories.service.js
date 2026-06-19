import * as storiesRepository from './stories.repository.js';

export const getAllStories = async () => {
    return await storiesRepository.findAll();
}

export const getStoriesById = async (id) => {
    return await storiesRepository.findById(Number(id));
};
