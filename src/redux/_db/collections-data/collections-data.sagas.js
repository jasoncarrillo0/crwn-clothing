import { takeEvery, call, put, all } from 'redux-saga/effects';
import { ACTION_TYPES } from '../../action-types';
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../../_db/collections-data/collections-data.actions';

// takeEvery creates a non-blocking instance of a function so the app can continue
function* fetchCollectionsStart() {
    yield takeEvery(
        ACTION_TYPES.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync 
    );
}

function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot       = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);    
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* collectionsDataSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}