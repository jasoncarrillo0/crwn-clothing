import React from 'react'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import crown from '../../images/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from '../Cart/CartDropdown'
import CategoriesDropdown from './CategoriesDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibilityStatus } from '../../redux/cart/cart.selectors'
import { selectUser } from '../../redux/user/user.selectors';
import { withRouter } from 'react-router-dom';
import { signOutStart } from '../../redux/user/user-actions';

const Header = ({ currentUser, cartIsHidden, history, signOutStart }) => {
    return (
        <div className={styles.topNav}>
            <ReactSVG className={styles.logo} wrapper="div" src={crown} onClick={() => history.push("/")}/>
            <div className={styles.links}>
                <Link to="/shop">SHOP</Link>
                <CategoriesDropdown/>
                <Link to="/contact">CONTACT</Link>
                {
                    currentUser ? (<div className="signOutLink" onClick={signOutStart}>SIGN OUT</div>)
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
const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectUser,
        cartIsHidden: selectCartVisibilityStatus
    }
);

function mapDispatchToProps(dispatch) {
    return {
        signOutStart: function() {
            return dispatch(signOutStart())
        }
    }
}
// connect will pass the copy of the user reducer's state to Header
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
