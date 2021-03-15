import { SAVE_USER_INFOS } from "./action-types";

export const saveUserInfos = infos => async dispatch => {
    dispatch({type: SAVE_USER_INFOS, payload: infos});
}