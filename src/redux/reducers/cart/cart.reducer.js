import { addCartToItem, removeItemFromCart } from "../../../utils/cart.utils"
import { cartActionType } from "../../types/cart/cart.type"

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

export const cartReducer = (state = INITIAL_STATE, action) =>{
    
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems:addCartToItem(state.cartItems, action.payload )
            }
        case cartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}