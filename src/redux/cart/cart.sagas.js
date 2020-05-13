import { all, put, takeLatest, call } from 'redux-saga/effects';
import { ACTION_TYPES } from '../action-types';
import { clearCart } from './cart-action';

function* onSignOutSuccess() {
    yield takeLatest(
        ACTION_TYPES.SIGN_OUT_SUCCESS,
        clearCartOnSignout
    )
}

function* clearCartOnSignout() {
    yield put(clearCart());
}



export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
    ]);
}