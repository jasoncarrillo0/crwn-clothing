import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './CredentialsPage.module.scss';

function CredentialsPage(props) {
    return (
        <div className={styles.formsWrapper}>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default CredentialsPage;