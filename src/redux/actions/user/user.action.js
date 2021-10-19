import { userActionType } from "../../types/user/user.type"

export const setCurrentUser = (user) => {
    return {
        type: userActionType.SET_CURRENT_USER,
        payload: user
    }
}