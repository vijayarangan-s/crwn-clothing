import { combineReducers } from 'redux'
import { userReducer } from "./index";

export default combineReducers({
    user: userReducer
})

