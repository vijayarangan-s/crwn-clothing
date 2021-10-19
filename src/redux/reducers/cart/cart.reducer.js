import { connect } from "react-redux"
import { cartActionType } from "../../types/cart/cart.type"

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

export const cartReducer = (state = INITIAL_STATE, action) =>{
    
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            console.log({state:"vj"})
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems:[...state.cartItems, action.payload ]
            }
        default:
            return state;
    }
}