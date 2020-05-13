import { all, call } from 'redux-saga/effects';
import { collectionsDataSagas } from './_db/collections-data/collections-data.sagas';
import { homePageSectionsSagas } from './_db/home-page-sections-data/sections-data.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([
        call(collectionsDataSagas),
        call(homePageSectionsSagas),
        call(userSagas),
        call(cartSagas)
    ]);
}