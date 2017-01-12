import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchGetApi, watchPostApi } from '../api/apiSaga';

function* root() {
  yield fork(watchGetApi);
  yield fork(watchPostApi);
}

const runRootSaga: () => void = () => sagaMiddleware.run(root);

export default runRootSaga;
