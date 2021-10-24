import { addCartToItem } from "../../../utils/cart.utils"
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
        default:
            return state;
    }
}