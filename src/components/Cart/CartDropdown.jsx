import React from 'react';
import CustomButton from '../Reusable/CustomButton';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart.selectors';
import './cartDropdown.scss';
import cartReducer from '../../redux/cart-reducer';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart-action';

function CartDropdown({ toggleCartHidden, cartItems, history }) {

    function handleButtonClick() {
        history.push("/checkout");
        toggleCartHidden();
    }

    return (
        <div className="cartDropdown">
            <div className="items">
            {
                cartItems.length ?
                cartItems.map(item => {
                    return <CartItem key={item.id} item={item}/>
                }) : (
                    <span className="emptyMsg">Your cart is empty.</span>
                )
            }
            </div>
            <CustomButton onClick={() => handleButtonClick()}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCartHidden: function() {
            return dispatch(toggleCartHidden());
        }
    }
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));