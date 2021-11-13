import { takeLatest, call, all,put } from "redux-saga/effects";
import { ShopActionType } from "../types/shop/shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "../actions/shop/shop.actions";

export function* fetchCollectionsAsync() {

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga(){
  yield(all([
    call(fetchCollectionsAsync)
  ]))
}
