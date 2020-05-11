import { ACTION_TYPES } from '../../action-types';
import { firestore, convertSectionsSnapshotToMap } from '../../../firebase/utils';

export function getFirebaseDirectoryCollection(homePageSections) {
    return {
        type: ACTION_TYPES.GET_HOMEPAGE_SECTIONS_DB,
        payload: homePageSections
    }
}

export function fetchHomePageSectionsStart() {
    return {
        type: ACTION_TYPES.FETCH_SECTIONS_START
    }
}

export function fetchHomePageSectionsSuccess(homePageSectionsMap) {
    return {
        type: ACTION_TYPES.FETCH_SECTIONS_SUCCESS,
        payload: homePageSectionsMap
    }
}

export function fetchHomePageSectionsFailure(errorMsg) {
    return {
        type: ACTION_TYPES.FETCH_SECTIONS_FAILURE,
        payload: errorMsg
    }
}

export function fetchHomePageSectionsAsync() {
    return dispatch => {
        const homePageSectionsRef = firestore.collection('homePageSections');
        dispatch(fetchHomePageSectionsStart());
        homePageSectionsRef.get().then(snapshot => {
            const homePageSectionsMap = convertSectionsSnapshotToMap(snapshot);
            dispatch(fetchHomePageSectionsSuccess(homePageSectionsMap));
        }).catch(error => {
            dispatch(fetchHomePageSectionsFailure(error.message));
        });
    }
}