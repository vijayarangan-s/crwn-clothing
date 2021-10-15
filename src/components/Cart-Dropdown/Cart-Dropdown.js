import React, { Component } from 'react'
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss'

const CartDropDown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown;