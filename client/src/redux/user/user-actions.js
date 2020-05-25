import { ACTION_TYPES } from '../action-types';

// Sign In------------------------------------------------------------------------------------
export function signInStartWithGoogle() {
    return {
        type: ACTION_TYPES.GOOGLE_SIGN_IN_START,
    }
}
export function signInStartWithEmail(emailAndPassword) {
    return {
        type: ACTION_TYPES.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}
export function signInSuccess(userOrEmailAndPassword) {
    return {
        type: ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: userOrEmailAndPassword
    }
}
export function signInFailure(error) {
    return {
        type: ACTION_TYPES.SIGN_IN_FAILURE,
        payload: error
    }
}


// SIGN OUT---------------------------------------------------------------------------
export function signOutStart() {
    return {
        type: ACTION_TYPES.SIGN_OUT_START
    }
}
export function signOutSuccess() {
    return {
        type: ACTION_TYPES.SIGN_OUT_SUCCESS
    }
}
export function signOutFailure(error) {
    return {
        type: ACTION_TYPES.SIGN_OUT_FAILURE,
        payload: error
    }
}



// USER SESSION CHECKING---------------------------------------------------------------------------
export function checkUserSession() {
    return {
        type: ACTION_TYPES.CHECK_USER_SESSION
    }
}


// SIGN UP---------------------------------------------------------------------------

// will never reach reducer because it's only used by the saga, and the saga will then sign in the user
export function signUpStart(credentials) {
    return {
        type: ACTION_TYPES.SIGN_UP_START,
        payload: credentials
    }
}
export function signUpFailure(error) {
    return {
        type: ACTION_TYPES.SIGN_UP_FAILURE,
        payload: error
    }
}