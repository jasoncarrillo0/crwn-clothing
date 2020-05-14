//import { sections } from '../../assets';
import { ACTION_TYPES } from '../../action-types';
// sections is specific parts of the whole chunk of shop data we have
const INITIAL_STATE = {
    sections: null,
    sectionsAreLoading: false,
    errorMsg: ""
}

function homePageSectionsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_HOMEPAGE_SECTIONS_DB:
            return {
                ...state,
                sections: action.payload
            }
        case ACTION_TYPES.FETCH_SECTIONS_START:
            return {
                ...state,
                sectionsAreLoading: true
            }
        case ACTION_TYPES.FETCH_SECTIONS_SUCCESS:
            return {
                ...state,
                sectionsAreLoading: false,
                sections: action.payload
            }
        case ACTION_TYPES.FETCH_SECTIONS_FAILURE:
            return {
                ...state,
                sectionsAreLoading: false,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}
export default homePageSectionsReducer;