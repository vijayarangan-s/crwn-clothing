import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { userActionType } from "../types/user/user.type";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../components/firebase/firebase.utils";
import { signInFailure, signInSuccess } from "../actions/user/user.action";

export function* getSnapshotFromUserAuth(userAuth){
  try{
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
      yield put(signInFailure(error))
  }
}

export function* signWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
      yield put(signInFailure(error))
  }
}

export function* signInWithEmail({payload:{email, password}}){
  try{
    const {user} =  yield auth.signInWithEmailAndPassword(email.email, email.password)
    yield getSnapshotFromUserAuth(user)
  }catch(err){
    yield put(signInFailure(err))
  }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, signWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionType.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSaga(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
