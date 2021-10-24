import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/actions/cart/cart.action';
import { selectCartItemsCount } from '../../utils/Selectors/cart.selectors';


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

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);