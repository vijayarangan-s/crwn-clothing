import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../images/crown.svg'
import { selectCartHidden } from '../../utils/Selectors/cart.selectors'
import { selectCurrentUser } from '../../utils/Selectors/user.selectors'
import CartDropDown from '../Cart-Dropdown/Cart-Dropdown'
import CartIcon from '../Cart-Icon/Cart-Icon'
import { auth } from '../firebase/firebase.utils'
import './Header.styles.scss'



const Header = ({currentUser, hidden}) => {

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
                <CartIcon/>
            </div>
            {hidden ? null:
            <CartDropDown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header)