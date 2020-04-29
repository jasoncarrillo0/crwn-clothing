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


export function returnTotalCartAmount(itemsArr) {
    // itemsArr = [{}, {}, {quantity: x}]
    let total = 0;
    itemsArr.forEach(item => {
        total = total + item.quantity;
    });
    return total;
}