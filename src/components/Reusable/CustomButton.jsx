import React from 'react';
import './customButton.scss';

const CustomButton = ({children, inverted, isGoogleSignIn, ...otherProps}) => {
    return (
        <button 
            type="button" 
            className={
                `${isGoogleSignIn ? 'googleSignIn' : ''}
                ${inverted ? 'inverted' : ''} 
                customButton`
            } 
            {...otherProps}
        >
            {children}
        </button>
    )
}
export default CustomButton;