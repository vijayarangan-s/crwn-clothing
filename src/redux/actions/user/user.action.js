import { userActionType } from "../../types/user/user.type"

export const googleSignInStart = () => ({
    type: userActionType.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionType.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  });

export const signInSuccess = user => ({
    type:userActionType.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionType.SIGN_IN_FAILURE,
    payload: error
})
