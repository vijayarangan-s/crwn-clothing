import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/actions/cart/cart.action';


import './Cart-Icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) => {
    
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount: cartItems.reduce((accQty, cartItem) => accQty+ cartItem.quantity ,0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);