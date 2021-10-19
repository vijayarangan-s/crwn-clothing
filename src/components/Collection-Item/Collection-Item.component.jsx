import React from "react";
import {connect} from 'react-redux'
import { cartAddItem } from "../../redux/actions/cart/cart.action";
import CustomButton from "../Custom-Button/Custom-Button.component";
import './Collection-Item.styles.scss'


const CollectionItem = ({item,cartAddItem}) => { 
    const {id, name, price, imageUrl} = item
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> cartAddItem(item)}
        inverted>Add To Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    cartAddItem: item => dispatch(cartAddItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);