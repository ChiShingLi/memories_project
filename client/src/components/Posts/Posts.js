import React from 'react';
import Post from './Post/Post'
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';

//fetch data from the redux store
import { useSelector } from 'react-redux';

const Posts = () => {
    //fetch from posts reducers
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    const classes = useStyles();
    return (
        //if there's no post, else...
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;