import { combineReducers } from 'redux'
import { userReducer, cartReducer } from "./index";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

