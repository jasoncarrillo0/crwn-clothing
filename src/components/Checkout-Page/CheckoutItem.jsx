import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItemQuantity, removeItemFromCart } from '../../redux/cart/cart-action';

import styles from './CheckoutItem.module.scss';

function CheckoutItem({ addItem, decreaseItemQuantity, removeItemFromCart, cartItem }) {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className={styles.checkoutItem}>
            <div className={styles.imgContainer}>
                <img src={imageUrl} alt="item"/>
            </div>
            <div className={styles.infoContainer}>
                <span className={styles.name}>{name}</span>
                <span className={styles.quantity}>
                    <div className={styles.arrow} onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</div>
                    <span className={styles.value}>{quantity}</span>
                    <div className={styles.arrow} onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
                <span className={styles.price}>{price}</span>
                <div className={styles.removeButton} onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
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