import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../images/crown.svg'
import { auth } from '../firebase/firebase.utils'
import './Header.styles.scss'


const Header = ({currentUser}) => {
    // const {currentUser} = this.props
    console.log({cu:currentUser})
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                     <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                     :
                     <Link to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser:state.user
})

export default connect(mapStateToProps, null)(Header)