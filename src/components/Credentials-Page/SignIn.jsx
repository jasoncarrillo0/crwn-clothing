import React, { Component } from 'react';
import CustomButton from '../Reusable/CustomButton';
import { TextField } from '@material-ui/core';
import { auth, signInWithGoogle } from '../../firebase/utils';
import styles from './SignIn.module.scss';


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

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword()
            this.setState({ email: '', password: ''})
        }
        catch (err) {
            console.log("Error logging in: " + err.message);
        }
    }
    render() {
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
                    <TextField name="arabic" 
                            type="text" 
                            variant="standard"
                            label="Arabic"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed',}}}
                    />
                    <div className={styles.buttonsWrapper}>
                        <CustomButton type="submit">SIGN-IN</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                        >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }   
}
export default SignIn;