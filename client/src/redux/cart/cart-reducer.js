import { ACTION_TYPES } from '../action-types';
import { initializeOrUpdateCartQuantity, removeItemFromCart } from './cart-action.utils';

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
        case ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case ACTION_TYPES.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
            }
        case ACTION_TYPES.CLEAR_CART:
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}
export default cartReducer;