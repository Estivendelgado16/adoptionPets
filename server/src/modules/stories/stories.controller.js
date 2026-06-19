import * as storiesService from './stories.service.js';

export const getAllStories = async (req, res, next) => {
    try {
        const stories = await storiesService.getAllStories();
        res.json(stories);
    } catch (err) {
        next(err);
    }
};

export const getStoriesById = async (req, res, next) => {
    try {
        const storiesById = await storiesService.getStoriesById(req.params.id);
        if(!storiesById) return res.status(404).json({message: 'Story not found'});
        res.json(storiesById);
    } catch (err) {
        next(err);
    }
};

