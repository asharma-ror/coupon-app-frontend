import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS, tokenAction } from '../actions/loginAction';
import { userAction } from '../../user/actions/userActions';

export function* loginSuccess(action) {
  const token = action.data.token;
  yield put(tokenAction(token));

  const user = action.data.user;
  yield put(userAction(user));
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}
