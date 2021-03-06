import { takeLatest, put, all, call } from 'redux-saga/effects';
import { ACTION_TYPES } from '../action-types';
import { auth, provider, createUserProfileDoc, getCurrentUser } from '../../firebase/utils';
import { 
    signInFailure, signInSuccess, 
    signOutSuccess, signOutFailure,
    signUpFailure, signInStartWithEmail } from './user-actions';
// UTILITIES -----------------------------------------------------------------
function* getSnapshotFromUserAuth(userAuth) { 
    try {
        const userRef      = yield call(createUserProfileDoc, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        yield put(signInFailure(error.code))
    }
}



// Google Sign In------------------------------------------------------------------------------------
function* onGoogleSignInStart() {
    yield takeLatest(
        ACTION_TYPES.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}
function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(provider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error.code))
    }
}



 
// User Sign In------------------------------------------------------------------------------------
function* onEmailSignInStart() {
    yield takeLatest(
        ACTION_TYPES.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}
function* signInWithEmail(action) {
    try {
        const { email, password } = action.payload;
        const { user }            = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);   
    } catch (error) {
        yield put(signInFailure(error.code))
    }
}




// USER SESSION CHECKING---------------------------------------------------------------------------
function* onCheckUserSession() {
    yield takeLatest(
        ACTION_TYPES.CHECK_USER_SESSION,
        checkIfUserIsAuthenticated
    )
}
function* checkIfUserIsAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) {
            return
        }
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error.code));
    }
}


// USER SIGN OUT---------------------------------------------------------------------------
function* onSignOutStart() {
    yield takeLatest(
        ACTION_TYPES.SIGN_OUT_START,
        userSignOut
    )
}
function* userSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error.code))
    }
}


// USER SIGN UP---------------------------------------------------------------------------
function* onSignUpStart() {
    yield takeLatest(ACTION_TYPES.SIGN_UP_START, signUp)
}
function* signUp(action) {
    const { displayName, email, password, confirmPassword } = action.payload;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Try again.");
        return;
    }
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserProfileDoc(user, { displayName });
        yield put(signInStartWithEmail({email, password}));
    } catch(error) {
        yield put(signUpFailure(error.code))
    }
}



// USER SIGN UP FAILURE---------------------------------------------------------------------------
function* onSignUpFailure() {
    yield takeLatest(ACTION_TYPES.SIGN_UP_FAILURE, showSignUpFailureMsg);
}
function showSignUpFailureMsg(action) {
    const errorMessage = action.payload;
    if (errorMessage === "Password should be at least 6 characters") {
        alert(errorMessage);
    }
    else if (errorMessage === "auth/email-already-in-use") {
        alert("Looks like you already have an account. Go ahead and sign in with the sign-in form.");
    }
}



// USER SIGN UP FAILURE---------------------------------------------------------------------------
function* onSignInFailure() {
    yield takeLatest(ACTION_TYPES.SIGN_IN_FAILURE, showSignInFailureMsg);
}
function showSignInFailureMsg(action) {
    const errorMessage = action.payload;
    if (errorMessage === "auth/user-not-found") {
        alert("Incorrect email or password. Please try again.");
    }
    else if (errorMessage === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
    }
}




export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpFailure),
        call(onSignInFailure)
    ]);
}