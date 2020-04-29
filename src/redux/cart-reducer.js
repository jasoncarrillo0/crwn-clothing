import { ACTION_TYPES } from './action-types';
import { initializeOrUpdateCartQuantity } from './cart-action.utils';

const INITIAL_STATE = {
    cartIsHidden: false,
    items: []
}

function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_CART_VISIBLE:
            return {
                ...state,
                cartIsHidden: !state.cartIsHidden
            }
        case ACTION_TYPES.ADD_ITEM:
            return {
                ...state,
                items: initializeOrUpdateCartQuantity(state.items, action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;