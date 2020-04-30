import { ReactComponent as ShoppingIcon } from '../../images/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart-action';
import { selectCartItemsCount } from '../../redux/cart.selectors';
import React from 'react'
import { createStructuredSelector } from 'reselect';
import './cartIcon.scss';

// itemCount: return value of memoized selector
// toggleCartHidden: an action
function CartIcon({ itemCount, toggleCartHidden }) {

    return (
        <div className="cartIcon" onClick={toggleCartHidden}>
            <ShoppingIcon/>
            <span className="count">{itemCount}</span>
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
const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);