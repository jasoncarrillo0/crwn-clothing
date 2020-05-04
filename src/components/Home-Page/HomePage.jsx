import React from 'react';
import styles from './Homepage.module.scss';
import Menu from './Menu';


const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Menu/>
        </div>
    );
}
    
export default HomePage;
