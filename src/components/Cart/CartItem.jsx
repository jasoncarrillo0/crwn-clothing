import React from 'react';
import './cartItem.scss';

function CartItem( { item: { imageUrl, price, name, quantity } }) {
    return (
        <div className="cartItem">
            <img src={imageUrl} alt="item"/>
            <div className="itemDetails">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    )
}
export default CartItem;