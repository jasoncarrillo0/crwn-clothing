import styled, { css } from 'styled-components';


const baseButtonStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`
const googleButtonStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const invertedButtonStyles = css`
    position: absolute;
    top: 280px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.7;
    background-color: white;
    color: black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid white;
        display: flex;
    }
`

const applyStyle = (props) => {
    if (props.isGoogleSignIn) {
        return googleButtonStyles;
    }
    else if (props.inverted) {
        return invertedButtonStyles;
    }
    else {
        return baseButtonStyles;
    }
}

export const StyledCustomButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${applyStyle}
`