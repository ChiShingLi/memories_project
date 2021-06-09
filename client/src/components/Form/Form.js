import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

//states
const Form = ({ currentId, setCurrentId }) => {
    //state hook
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    //if we have current id, then we loop over state.posts then find the post that have the same id 
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    //when post changes
    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        //if we have an post id, then we are updating the post
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    //changing only the creator state
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}>
                    </FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;