import React from "react";
import {withRouter} from 'react-router-dom';
import { MenuItemContainer } from './MenuItem.styles.jsx';
import styles from './MenuItem.module.scss';

const MenuItem = ({title, imageUrl, linkUrl, size, match, history}) => {
    return (
        <MenuItemContainer 
            size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }}>
            
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </div>
        </MenuItemContainer>
    );
};

export default withRouter(MenuItem);
