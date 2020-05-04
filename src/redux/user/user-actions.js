import { ACTION_TYPES } from '../action-types';
export function setCurrentUser(user) {
    return {
        type: ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}