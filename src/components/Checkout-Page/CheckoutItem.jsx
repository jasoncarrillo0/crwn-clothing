import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItemQuantity, removeItemFromCart } from '../../redux/cart/cart-action';

import './checkoutItem.scss';

function CheckoutItem({ addItem, decreaseItemQuantity, removeItemFromCart, cartItem }) {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkoutItem">
            <div className="imgContainer">
                <img src={imageUrl} alt="item"/>
            </div>
            <div className="infoContainer">
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
                <span className="price">{price}</span>
                <div className="removeButton" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        removeItemFromCart: function(item) {
            return dispatch(removeItemFromCart(item))
        },
        addItem: function(item) {
            return dispatch(addItem(item))
        },
        decreaseItemQuantity: function(item) {
            return dispatch(decreaseItemQuantity(item))
        }
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem);