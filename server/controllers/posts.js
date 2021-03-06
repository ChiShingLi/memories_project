import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

//routes logics

//get all posts
export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find()
        res.status(200).json(PostMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// create post
export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//update post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params; //destruct out id
    const post = req.body;

    //check if id is valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }
    //sendback updated post
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}