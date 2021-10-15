import { connect } from "react-redux"
import { cartActionType } from "../../types/cart/cart.type"

const INITIAL_STATE = {
    hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) =>{
    
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            console.log({state:"vj"})
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}