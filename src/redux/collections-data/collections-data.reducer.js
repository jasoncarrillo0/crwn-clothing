import { SHOP_DATA } from '../../assets';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

function collectionsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
export default collectionsReducer;