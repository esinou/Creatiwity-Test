import { SAVE_USER_INFOS } from '../actions/action-types';

const initialState = {
    myBook: [{
        title: "",
        desc: "",
        photo: ""
    }],
}

export default function saveUserInfos(state = initialState, action) {
    if (action.type === SAVE_USER_INFOS) {
        return {
            myBook: action.payload.myBook,
        }
    }
    return state;
}