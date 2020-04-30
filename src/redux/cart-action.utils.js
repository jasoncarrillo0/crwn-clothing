
export function initializeOrUpdateCartQuantity(cartItems, cartItemToAdd) {
    const existingCartItem = cartItems.find(cartItem => {
        if (cartItem.id === cartItemToAdd.id) {
            return cartItem
        }
        else {
            return null
        }
    });
    
    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            }
            else {
                return cartItem
            }
        });
    }
    else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter (
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id) {
            return {...cartItem, quantity: cartItem.quantity - 1}
        } else {
            return cartItem
        }
    });
}