import React, { Component } from 'react'
import CustomButton from '../Custom-Button/Custom-Button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../Form-Input/Form-Input.component';

import './SignIn.styles.scss'

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                     <FormInput 
                        name="email" t
                        ype="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required
                        />


                     <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required/>

                     <CustomButton type="submit"> Sign In</CustomButton> 
                     <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton> 
                </form>
            </div>
        )
    }
}

export default SignIn