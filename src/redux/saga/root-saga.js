import { all, call } from "@redux-saga/core/effects";
import { cartSaga } from "./cart.saga";
import { shopSaga } from "./shop.saga";
import { userSaga } from "./user.saga";

export default function* rootSaga(){
    yield all([
        call(shopSaga), 
        call(userSaga),
        call(cartSaga)
    ])
}
