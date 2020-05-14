import { createSelector } from 'reselect';

const cart = state => state.cart;
// createSelector(key from app state, function(key) {return key.value}))
// takes in a key value (a reducer), returns any value from the reducer wanted
export const selectCartItems = createSelector(
    [cart],
    cart => cart.items
);
export const selectCartVisibilityStatus = createSelector(
    [cart],
    cart => cart.cartIsHidden
)


// get total cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    function (cartItems) {
        return cartItems.reduce( (accumulatedQuantity, cartItem) => {
            return accumulatedQuantity + cartItem.quantity
        }, 0);
    }
);

// get total cost of all items
export const selectTotalCostInCart = createSelector(
    [selectCartItems],
    function (cartItems) {
        return cartItems.reduce( (accumulatedQuantity, cartItem) => {
            return accumulatedQuantity + (cartItem.quantity * cartItem.price);
        }, 0);
    }
);