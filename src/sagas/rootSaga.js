import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchGetApi, watchPostApi, watchDeleteApi } from '../api/apiSaga';
import { watchLogin, watchLogout } from '../modules/authentication/sagas/loginFlowSaga';
import { watchCouponsAction } from '../modules/coupons/sagas/couponsSaga';
import { watchPushPathSaga } from '../routes/sagas/routeSaga';
import startup from '../modules/startup/sagas/startupSaga';

function* root() {
  yield fork(watchPushPathSaga);
  yield fork(startup);
  yield fork(watchGetApi);
  yield fork(watchPostApi);
  yield fork(watchDeleteApi);
  yield fork(watchLogin);
  yield fork(watchLogout);
  yield fork(watchCouponsAction);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
