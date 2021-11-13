import {takeLatest, put, call, all} from 'redux-saga/effects'
import { clearCart } from '../actions/cart/cart.action'
import {userActionType} from '../types/user/user.type'

export function* clearCartOnSignOut(){
    yield console.log("saga clear")
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga(){
    yield(all([call(onSignOutSuccess)]))
}
