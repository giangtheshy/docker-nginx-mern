import { call, put } from "redux-saga/effects";

import * as apis from "Apis";
import * as postActions from "Store/actions/post.actions";

export function* getPosts() {
  try {
    const { data } = yield call(apis.getPosts);
    yield put(postActions.setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
