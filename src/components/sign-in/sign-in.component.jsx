import React from 'react';

import FormInput from '../form-input/form-input.conponent';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
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
                

                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>

            </form>


        </div>
        )
    }


}

export default SignIn;