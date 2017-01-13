/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS, tokenAction } from '../actions/loginAction';
import { userAction } from '../../user/actions/userActions';
import { pushPath } from '../../../routes/actions/routeActions';
import { COUPONS_ROUTE } from '../../../constants/Routes';
import { setAuthorizationToken } from '../../../api/api';
import { AUTHENTICATION_TOKEN_STORAGE_KEY } from '../../../constants/constants';

export function* loginSuccess(action) {
  const token = action.data.token;
  yield put(tokenAction(token));
  localStorage.setItem(AUTHENTICATION_TOKEN_STORAGE_KEY, token);
  yield call(setAuthorizationToken, token);

  const user = action.data.user;
  yield put(userAction(user));

  yield put(pushPath(COUPONS_ROUTE));
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}
