import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { auth } from '../../firebase/utils';
import crown from '../../images/crown.svg';
import { connect } from 'react-redux';
import shopBag from '../../images/cart.svg';
import CartIcon from './CartIcon';
import CartDropdown from '../Cart/CartDropdown'




const Header = ({ currentUser, cartIsHidden }) => {
    return (
        <div className="top-nav">
            <ReactSVG src={crown}/>
            <div className="links">
                <Link to="/shop">SHOP</Link>
                <Link to="/contact">CONTACT</Link>
                {
                    currentUser ? (<div onClick={() => auth.signOut()}>SIGN OUT</div>)
                                : (<Link to="/sign-in">SIGN-IN</Link>)
                }
                <CartIcon/>
            </div>
            {
                cartIsHidden ? <CartDropdown/>
                             : null
            }
        </div>
    )
}

// params: takes in the root reducer
// returns: an object with the return value of the user reducers state value
// essentially it returns a copy of the user reducer's state
function mapAppStateToProps(appState) {
    return {
        // value is: rootReducerObj.key.keyReturnedByReducer
        currentUser: appState.user.currentUser,
        cartIsHidden: appState.cart.cartIsHidden
    }
}
// connect will pass the copy of the user reducer's state to Header
export default connect(mapAppStateToProps)(Header);
