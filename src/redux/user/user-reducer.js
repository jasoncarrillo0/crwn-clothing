import { ACTION_TYPES } from '../action-types';
const INITIAL_STATE = {
    currentUser: null,
    errorMsg: "",
}

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.GOOGLE_SIGN_IN_START:
        case ACTION_TYPES.EMAIL_SIGN_IN_START:
            return {
                ...state
            }
        case ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            }
        case ACTION_TYPES.SIGN_IN_FAILURE:
        case ACTION_TYPES.SIGN_OUT_FAILURE:
            return {
                ...state,
                errorMsg: action.payload
            }
        case ACTION_TYPES.SIGN_OUT_START:
            return {
                ...state
            }
        case ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMsg: null
            }
        default:
            return state;
    }
}
export default userReducer;