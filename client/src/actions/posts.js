import * as api from '../api';

//action creators
//functions as return actoins
//use redux thunk to dispatch
export const getPosts = () => async (dispatch) => {
    try {
        //destruct the data from response
        const { data } = await api.fetchPosts();

        //send the data action via dispatcher
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        //make POST api request to server
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}