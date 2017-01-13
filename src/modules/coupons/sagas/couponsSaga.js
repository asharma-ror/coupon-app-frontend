import { put, takeEvery } from 'redux-saga/effects';
import * as CouponActionTypes from '../actions/couponActionTypes';
import { getCouponsAction } from '../actions/couponActions';

export function* getCouponsList() {
  yield put(getCouponsAction());
}

export function* watchCouponsAction() {
  yield takeEvery([
    CouponActionTypes.DELETE_COUPON_SUCCESS,
    CouponActionTypes.CREATE_COUPON_SUCCESS,
  ], getCouponsList);
}
