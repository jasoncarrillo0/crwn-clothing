import React from 'react';
import CustomButton from '../Reusable/CustomButton';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import './cartDropdown.scss';
import cartReducer from '../../redux/cart-reducer';

function CartDropdown({ items }) {
    return (
        <div className="cartDropdown">
            <div className="items">
            {
                items.map(item => {
                    return <CartItem key={item.id} item={item}/>
                })
            }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

function mapAppStateToProps({ cart: { items } }) {
    return {
        items: items
    }
}
export default connect(mapAppStateToProps)(CartDropdown);