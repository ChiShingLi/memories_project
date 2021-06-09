import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router();

// GET /posts/
router.get('/', getPosts);

// Get /posts/
router.post('/', createPost);

// PATCH /posts/:id
router.patch('/:id', updatePost);


export default router;