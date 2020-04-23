import React from 'react'
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import crown from '../images/crown.svg';

const Header = () => {
    return (
        <div className="top-nav">
            <ReactSVG src={crown}/>
            <div className="links">
                <Link to="/shop">SHOP</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/sign-in">SIGN-IN</Link>
                <Link to="/cart">CART</Link>
            </div>
        </div>
    )
}
export default Header;