import React, { Component } from 'react';
import CustomButton from '../Reusable/CustomButton';
import { TextField } from '@material-ui/core';
import styles from './SignIn.module.scss';
import { signInStartWithEmail, signInStartWithGoogle } from '../../redux/user/user-actions';
import { connect } from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value }) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { signInStartWithEmail } = this.props;
        const emailAndPassword  = this.state;
        signInStartWithEmail(emailAndPassword);
    }

    render() {
        const { signInStartWithGoogle } = this.props;
        return (
            <div className={styles.signInWrapper}>
                <h1 className={styles.signInHeading}>I already have an account</h1>
                <p className={styles.signInSubheading}>Sign in with your email and password</p>
                <form className={styles.signInForm} onSubmit={this.handleSubmit}>
                    <TextField name="email" 
                            type="email" 
                            onChange={this.handleChange}
                            value={this.state.email}
                            variant="standard"
                            label="Email"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed'}}}
                    />
                    <TextField name="password" 
                            type="password" 
                            onChange={this.handleChange}
                            value={this.state.password}
                            variant="standard"
                            label="Password"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed',}}}
                    />
                    <div className={styles.buttonsWrapper}>
                        <CustomButton 
                            type="submit">
                        SIGN-IN</CustomButton>
                        <CustomButton 
                            type="button"
                            onClick={signInStartWithGoogle}
                            isGoogleSignIn={true}
                        >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }   
}

function mapDispatchToProps(dispatch) {
    return {
        signInStartWithEmail: function(emailAndPassword) {
            return dispatch(signInStartWithEmail(emailAndPassword));
        },
        signInStartWithGoogle: function() {
            return dispatch(signInStartWithGoogle());
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);