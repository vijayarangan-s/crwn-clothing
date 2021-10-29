import React, { Component } from 'react'
import {connect} from 'react-redux'
import { removeItemFromCart, cartAddItem, removeItem } from '../../redux/actions/cart/cart.action'
import './Checkout-Item.styles.scss'

const CheckoutItem = ({cartItem, clearItem, cartAddItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
                    <span className="value">
                        {quantity}
                    </span>
                <div className="arrow" onClick={()=> cartAddItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    cartAddItem: item => dispatch(cartAddItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
