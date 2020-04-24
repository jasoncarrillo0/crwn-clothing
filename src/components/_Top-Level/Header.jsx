import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { auth } from '../../firebase/utils';
import crown from '../../images/crown.svg';

const Header = ({ currentUser }) => {
    return (
        <div className="top-nav">
            <ReactSVG src={crown}/>
            <div className="links">
                <Link to="/shop">SHOP</Link>
                <Link to="/contact">CONTACT</Link>
                {
                    currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div>
                                : <Link to="/sign-in">SIGN-IN</Link>
                }
                <Link to="/cart">CART</Link>
            </div>
        </div>
    )
}
export default Header;