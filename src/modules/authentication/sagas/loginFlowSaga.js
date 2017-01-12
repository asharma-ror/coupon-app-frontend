import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS } from './actions/loginAction';

function* loginSuccess(action) {
  yield put();
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}
