import express from 'express';

const router = express.Router();

// GET /posts/
router.get('/', (req, res) => {
    res.send('hello');
});

export default router;