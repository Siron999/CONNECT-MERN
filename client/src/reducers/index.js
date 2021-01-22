import {combineReducers} from 'redux';
import posts from './posts';
import currentId from './currentId';
import user from './user'

export default combineReducers({
    posts,
    currentId,
    current_user:user,
});