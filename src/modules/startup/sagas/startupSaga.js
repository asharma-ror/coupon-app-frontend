/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { call, put } from 'redux-saga/effects';
import { AUTHENTICATION_TOKEN_STORAGE_KEY } from '../../../constants/constants';
import { setAuthorizationToken } from '../../../api/api';
import { tokenAction } from '../../authentication/actions/loginAction';

function* startup() {
  const token = localStorage.getItem(AUTHENTICATION_TOKEN_STORAGE_KEY);
  if (token) {
    yield put(tokenAction(token));
    yield call(setAuthorizationToken, token);
  }
}

export default startup;
