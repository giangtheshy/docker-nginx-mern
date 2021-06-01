import { all } from "redux-saga/effects";

import { postSaga } from "./watchers/post.watcher";

function* rootSaga() {
  yield all([postSaga()]);
}
export default rootSaga;
