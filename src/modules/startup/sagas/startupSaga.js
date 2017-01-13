/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { call, put } from 'redux-saga/effects';
import { AUTHENTICATION_TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '../../../constants/constants';
import { setAuthorizationToken } from '../../../api/api';
import { tokenAction } from '../../authentication/actions/loginAction';
import { userAction } from '../../user/actions/userActions';

function* startup() {
  const token = localStorage.getItem(AUTHENTICATION_TOKEN_STORAGE_KEY);
  const userString = localStorage.getItem(USER_STORAGE_KEY);

  if (token && userString) {
    yield put(tokenAction(token));
    yield put(userAction(JSON.parse(userString)));
    yield call(setAuthorizationToken, token);
  }
}

export default startup;
