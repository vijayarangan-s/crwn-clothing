import { userActionType } from "../../types/user/user.type"

export const setCurrentUser = (user) => {
    return {
        type: userActionType.SET_CURRENT_USER,
        payload: user
    }
}

export const googleSignInStart = () => ({
    type: userActionType.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type:userActionType.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: userActionType.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: userActionType.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}

export const emailSignInSuccess = user => ({
    type:userActionType.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = error => ({
    type: userActionType.EMAIL_SIGN_IN_FAILURE,
    payload: error
})