import { ReactComponent as ShoppingIcon } from '../../images/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart-action';
import { returnTotalCartAmount } from '../../redux/cart-action.utils';
import React from 'react'
import './cartIcon.scss';

function CartIcon({ items, toggleCartHidden }) {

    return (
        <div className="cartIcon" onClick={toggleCartHidden}>
            <ShoppingIcon/>
            <span className="count">{returnTotalCartAmount(items)}</span>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCartHidden: function() {
            dispatch(toggleCartHidden());
        }
    }
}
function mapStateToProps({ cart: { items }}) {
    return {
        items: items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);