import { postApiAction, getApiAction, deleteApiAction } from '../../../api/apiActions';
import * as CouponActionTypes from './couponActionTypes';

export const getCouponsAction = () => (
  getApiAction({
    types: [
      CouponActionTypes.GET_COUPONS,
      CouponActionTypes.GET_COUPONS_SUCCESS,
      CouponActionTypes.GET_COUPONS_FAILURE,
    ],
    url: '/api/v1/coupon',
  })
);

export const deleteCouponAction = id => (
  deleteApiAction({
    types: [
      CouponActionTypes.DELETE_COUPON,
      CouponActionTypes.DELETE_COUPON_SUCCESS,
      CouponActionTypes.DELETE_COUPON_FAILURE,
    ],
    id,
    url: `/api/v1/coupon/${id}`,
  })
);

export const createCouponAction = body => (
  postApiAction({
    types: [
      CouponActionTypes.CREATE_COUPON,
      CouponActionTypes.CREATE_COUPON_SUCCESS,
      CouponActionTypes.CREATE_COUPON_FAILURE,
    ],
    url: '/api/v1/coupon/create',
    body,
  })
);
