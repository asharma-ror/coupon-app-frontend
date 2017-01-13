import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS, tokenAction } from '../actions/loginAction';
import { userAction } from '../../user/actions/userActions';
import { pushPath } from '../../../routes/actions/routeActions';
import { COUPONS_ROUTE } from '../../../constants/Routes';

export function* loginSuccess(action) {
  const token = action.data.token;
  yield put(tokenAction(token));

  const user = action.data.user;
  yield put(userAction(user));

  yield put(pushPath(COUPONS_ROUTE));
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}
