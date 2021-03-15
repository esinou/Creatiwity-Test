import { combineReducers } from 'redux';
import infosUser from './userReducer'

const rootReducer = combineReducers({
    user: infosUser
});

export default rootReducer;
