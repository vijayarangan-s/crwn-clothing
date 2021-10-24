import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/actions/cart/cart.action';


import './Cart-Icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => {

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);