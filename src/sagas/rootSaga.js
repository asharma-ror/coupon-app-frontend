import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchGetApi, watchPostApi } from '../api/apiSaga';
import { watchLogin } from '../modules/authentication/sagas/loginFlowSaga';

function* root() {
  yield fork(watchGetApi);
  yield fork(watchPostApi);
  yield fork(watchLogin);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
