import React, { Component } from 'react'
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/actions/user/user.action';
import CustomButton from '../Custom-Button/Custom-Button.component';
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
        const {emailSignInStart} = this.props
        emailSignInStart({email, password})
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    render(){
        const {googleSignInStart} = this.props
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign In with your email and password</span>

                <form>
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
                            type="submit"
                            onClick={this.handleSubmit}
                            > 
                            Sign In
                        </CustomButton> 

                        <CustomButton 
                           type="button"
                           onClick={googleSignInStart} 
                           isGoogleSignIn> 
                           Sign In With Google
                        </CustomButton> 
                     </div>   

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:() => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
