import { userActionType } from "../../types/user/user.type";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action?.payload?.currentUser
            }
        default:
            return state;
    }
}