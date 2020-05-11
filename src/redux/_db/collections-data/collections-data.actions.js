import { ACTION_TYPES } from '../../action-types';
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/utils';

export function getFirebaseCollections(collectionsMap) {
    return {
        type: ACTION_TYPES.GET_COLLECTIONS_FROM_DB,
        payload: collectionsMap
    }
}

export function fetchCollectionsStart() {
    return {
        type: ACTION_TYPES.FETCH_COLLECTIONS_START
    }
}

export function fetchCollectionsSuccess(collectionsMap) {
    return {
        type: ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}

export function fetchCollectionsFailure(errorMsg) {
    return {
        type: ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
        payload: errorMsg
    }
}
export function fetchCollectionsStartAsync() {
    return dispatch => {
        const collectionsRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => {
            dispatch(fetchCollectionsFailure(error.message));
        });
    }
}
