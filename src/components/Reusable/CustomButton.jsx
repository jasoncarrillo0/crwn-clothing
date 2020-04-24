import React from 'react';
import './customButton.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'googleSignIn' : ''} customButton`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;