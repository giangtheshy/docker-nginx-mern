import { takeLatest, all } from "redux-saga/effects";
import * as types from "types";
import * as sagas from "Store/sagas/handlers/post.saga";

function* watcherGetPosts() {
  yield takeLatest(types.GET_POSTS, sagas.getPosts);
}

export function* postSaga() {
  yield all([watcherGetPosts()]);
}
