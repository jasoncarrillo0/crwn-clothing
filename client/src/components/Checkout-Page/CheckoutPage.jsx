import React from 'react';
import './checkoutPage.scss';
import CheckoutItem from './CheckoutItem';
import StripeButton from './StripeButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalCostInCart } from '../../redux/cart/cart.selectors';

function CheckoutPage({ cartItems, totalCost }) {
    return (
        <div className="checkoutPage">
            <div className="itemsHeader">
                <div className="firstChild">
                    <span className="column">Product</span>
                </div>
                <div className="otherChildren">
                    <div className="headerBlock">
                        <span className="column">Description</span>
                    </div>
                    <div className="headerBlock">
                        <span className="column">Quantity</span>
                    </div>
                    <div className="headerBlock">
                        <span className="column">Price</span>
                    </div>
                    <div className="headerBlock">
                        <span className="column">Remove</span>
                    </div>
                </div>
            </div>

            <div className="cartItems">
                {
                    cartItems.map( (cartItem) => {
                        return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    })
                }
            </div>
            <div className="total">
                <span>TOTAL: ${totalCost}</span>
            </div>
            <div className="cardTestWarning">
                *Please use the following test credit card*
                <br/>
                <strong>4242 4242 4242 4242</strong> - EXP: <strong>01/22 </strong>- CVC: <strong>123</strong> 
            </div>
            <StripeButton price={totalCost}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        totalCost: selectTotalCostInCart,
        cartItems: selectCartItems
    }
)
export default connect(mapStateToProps)(CheckoutPage);