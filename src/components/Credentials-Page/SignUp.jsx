import React, { Component } from 'react';
import CustomButton from '../Reusable/CustomButton';
import { TextField } from '@material-ui/core';
import { auth, createUserProfileDoc } from '../../firebase/utils';
import styles from './SignUp.module.scss';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value }) 
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });
            // clear form and state
            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword:''
            });
        }
        catch (error) {
            console.log("Error adding user: " + error.message);
        }
    }
    render() {
        return (
            <div className={styles.signUpWrapper}>
                <h1 className={styles.signUpHeading}>I do not have an account</h1>
                <p className={styles.signUpSubheading}>Sign in with your email and password</p>
                <form className={styles.signUpForm} onSubmit={this.handleSubmit}>
                    <TextField name="displayName" 
                            type="text" 
                            value={this.state.displayName}
                            onChange={this.handleChange}
                            variant="standard"
                            label="Name"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed'}}}
                    />
                    <TextField name="email" 
                            type="email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                            variant="standard"
                            label="Email"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed'}}}
                            required
                    />
                    <TextField name="password" 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                            variant="standard"
                            label="Password"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed',}}}
                            required
                    />
                    <TextField name='confirmPassword'
                            type="password" 
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            variant="standard"
                            label="Confirm Password"
                            fullWidth={true}
                            InputLabelProps={{style: {fontFamily: 'Open Sans Condensed',}}}
                            required
                    />
                    <div className={styles.buttonsWrapper}>
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }   
}
export default SignUp;