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

export function removeItemFromCart(item) {
    return {
        type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}

export function decreaseItemQuantity(item) {
    return {
        type: ACTION_TYPES.DECREASE_ITEM_QUANTITY,
        payload: item
    }
}