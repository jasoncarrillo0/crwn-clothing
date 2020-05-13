// begin homePageSections saga here
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { ACTION_TYPES } from '../../action-types';
import { firestore, convertSectionsSnapshotToMap } from '../../../firebase/utils';
import { fetchHomePageSectionsSuccess, fetchHomePageSectionsFailure } from '../../_db/home-page-sections-data/sections-data.actions';

function* fetchHomePageSectionsStart() {
    yield takeEvery(
        ACTION_TYPES.FETCH_SECTIONS_START,
        fetchHomePageSectionsAsync
    )
}

function* fetchHomePageSectionsAsync() {
    try {
        const homePageSectionsRef = firestore.collection('homePageSections');
        const snapshot = yield homePageSectionsRef.get();
        const homePageSectionsMap = yield call(convertSectionsSnapshotToMap, snapshot);
        yield put(fetchHomePageSectionsSuccess(homePageSectionsMap));
    } catch (error) {
        yield put(fetchHomePageSectionsFailure(error.message));
    }
}



export function* homePageSectionsSagas() {
    yield all([
        call(fetchHomePageSectionsStart)
    ]);
}