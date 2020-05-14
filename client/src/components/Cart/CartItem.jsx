import React from 'react';
import styles from './CartItem.module.scss';

function CartItem( { item: { imageUrl, price, name, quantity } }) {
    return (
        <div className={styles.cartItem}>
            <img src={imageUrl} alt="item"/>
            <div className={styles.itemDetails}>
                <span className={styles.name}>{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}
export default CartItem;