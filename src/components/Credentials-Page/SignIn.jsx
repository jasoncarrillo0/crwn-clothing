import React, { Component } from 'react';
import CustomButton from '../Reusable/CustomButton';
import { TextField } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase/utils';
import './signIn.scss';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target.value;
        this.setState({ [name]: value }) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="signInWrapper">
                <h1 className="signInHeading">I already have an account</h1>
                <p className="signInSubheading">Sign in with your email and password</p>
                <form className="signInForm" onSubmit={this.handleSubmit}>
                    <TextField name="email" 
                            type="email" 
                            onChange={this.handleChange}
                            variant="standard"
                            label="Email"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed'}}}
                    />
                    <TextField name="password" 
                            type="password" 
                            onChange={this.handleChange}
                            variant="standard"
                            label="Password"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed',}}}
                    />
                    {/* <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required/> */}
                    <div className="buttonsWrapper">
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