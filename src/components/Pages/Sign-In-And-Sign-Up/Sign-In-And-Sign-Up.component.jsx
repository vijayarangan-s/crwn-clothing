import React from 'react'
import SignUp from '../../Sign-Up/SignUp.component'
import SignIn from '../../SignIn/SignIn.component'
import './Sign-In-And-Sign-Up.styles.scss'

export const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
