import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../images/crown.svg'
import './Header.styles.scss'

export const Header = () => {
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
            </div>
        </div>
    )
}
