import { SAVE_USER_INFOS } from '../actions/action-types';

const initialState = {
    bookData: [],
}

export default function saveUserInfos(state = initialState, action) {
    if (action.type === SAVE_USER_INFOS) {
        return {
            bookData: action.payload.bookData,
        }
    }
    return state;
}