import { all, call } from "@redux-saga/core/effects";
import { fetchCollectionsStart } from "./shop.saga";
import { userSaga } from "./user.saga";

export default function* rootSaga(){
    yield all([call(fetchCollectionsStart), call(userSaga)])
}