import { ACTION_TYPES } from './action-types';
export function toggleCartHidden() {
    return {
        type: ACTION_TYPES.TOGGLE_CART_VISIBLE,
    }
}

// add item to cart
export function addItem(item) {
    return {
        type: ACTION_TYPES.ADD_ITEM,
        payload: item
    }
}