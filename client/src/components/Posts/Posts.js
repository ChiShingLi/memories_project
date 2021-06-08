import React from 'react';
import Post from './Post/Post'
import useStyles from './styles';

//fetch data from the redux store
import { useSelector } from 'react-redux';

const Posts = () => {
    //fetch from posts reducers
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    const classes = useStyles();
    return (
        <div>
            <h1>Posts</h1>
            <Post />
            <Post />
        </div>
    );
}

export default Posts;