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