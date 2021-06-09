export default (posts = [], action) => {
    //return the states change by the action
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}