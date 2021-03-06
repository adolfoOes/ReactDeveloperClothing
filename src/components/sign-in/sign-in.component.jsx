import React from 'react';

import FormInput from '../form-input/form-input.conponent';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error)
        }

    }

    render() {
        return (<div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    value={this.state.email}
                    required
                    type='text'
                    handleChange={this.handleChange}
                    label="Email"
                />


                <FormInput
                    name='password'
                    value={this.state.password}
                    required
                    type='password'
                    handleChange={this.handleChange}
                    label="Password"
                />

                <div className='buttons'>
                    <CustomButton
                        type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton
                        onClick={signInWithGoogle}
                        type='button'
                        isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>


        </div>
        )
    }


}

export default SignIn;