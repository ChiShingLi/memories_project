import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// GET /posts/
router.get('/', getPosts);

// Get /Posts/
router.post('/', createPost);

export default router;