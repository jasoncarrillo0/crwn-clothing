import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './credentialsPage.scss';

function CredentialsPage(props) {
    return (
        <div className="formsWrapper">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default CredentialsPage;