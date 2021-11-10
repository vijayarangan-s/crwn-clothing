import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { userActionType } from "../types/user/user.type";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../components/firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "../actions/user/user.action";

export function* signWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
      yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, signWithGoogle)
}

export function* userSaga(){
    yield all([call(onGoogleSignInStart)])
}