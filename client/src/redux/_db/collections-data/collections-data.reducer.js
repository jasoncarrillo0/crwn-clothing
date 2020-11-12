import { ACTION_TYPES } from '../../action-types';
//import { SHOP_DATA } from '../../assets';

const INITIAL_STATE = {
    collectionsIsFetching: false,
    errorMsg: "",
    collections: null
}

function firebaseCollectionsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTION_TYPES.FETCH_COLLECTIONS_START:
            return {
                ...state,
                collectionsIsFetching: true
            }
        case ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collectionsIsFetching: false,
                collections: action.payload
            }
        case ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                collectionsIsFetching: false,
                errorMsg: action.payload
            }
        default:
            return state
    }
}
export default firebaseCollectionsReducer;