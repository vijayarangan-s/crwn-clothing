import React, { Component } from 'react'
import CustomButton from '../Custom-Button/Custom-Button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
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

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state

        try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({email:'', password: ''})  

        } catch(err){
            console.log(err.message)
        }
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
                     <div className="buttons">
                        <CustomButton 
                            type="submit"> 
                            Sign In
                        </CustomButton> 

                        <CustomButton 
                           onClick={signInWithGoogle} 
                           isGoogleSignIn> 
                           Sign In With Google
                        </CustomButton> 
                     </div>   

                </form>
            </div>
        )
    }
}

export default SignIn