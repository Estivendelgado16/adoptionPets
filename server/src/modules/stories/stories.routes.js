import { Router } from 'express';
import { getAllStories, getStoriesById } from './stories.controller.js';

const router = Router();

router.get('/', getAllStories);
router.get('/:id', getStoriesById);

export default router;