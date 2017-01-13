/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS, tokenAction, LOGOUT } from '../actions/loginAction';
import { userAction } from '../../user/actions/userActions';
import { pushPath } from '../../../routes/actions/routeActions';
import { COUPONS_ROUTE, LOGIN_ROUTE } from '../../../constants/Routes';
import { setAuthorizationToken } from '../../../api/api';
import { AUTHENTICATION_TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '../../../constants/constants';

export function* loginSuccess(action) {
  const token = action.data.token;
  yield put(tokenAction(token));
  localStorage.setItem(AUTHENTICATION_TOKEN_STORAGE_KEY, token);
  yield call(setAuthorizationToken, token);

  const user = action.data.user;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  yield put(userAction(user));

  yield put(pushPath(COUPONS_ROUTE));
}

export function* logout() {
  const token = '';
  yield put(tokenAction(token));
  localStorage.removeItem(AUTHENTICATION_TOKEN_STORAGE_KEY, token);
  yield call(setAuthorizationToken, token);

  yield put(userAction({}));
  localStorage.removeItem(USER_STORAGE_KEY, {});
  yield put(pushPath(LOGIN_ROUTE));
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
