import styled, { css } from 'styled-components';

const largeStyle = css`
    height: 380px;
`;

const getLargeStyle = props => {
    if (props.size) {
        console.log(props);
        return largeStyle;
    }
    else {
        return null;
    }
}

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    
    }

    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

    ${getLargeStyle}
`;