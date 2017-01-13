import * as CouponActionTypes from '../actions/couponActionTypes';

const initialState = {
  isGettingCoupons: false,
  isDeletingCoupons: false,
  isCreatingCoupons: false,
  coupons: [],
};

const coupons = (state = initialState, action) => {
  switch (action.type) {
    case CouponActionTypes.GET_COUPONS:
      return {
        ...state,
        isGettingCoupons: true,
      };
    case CouponActionTypes.GET_COUPONS_SUCCESS:
      return {
        ...state,
        isGettingCoupons: false,
        coupons: action.data.coupons,
      };
    case CouponActionTypes.GET_COUPONS_FAILURE:
      return {
        ...state,
        isGettingCoupons: false,
      };
    case CouponActionTypes.DELETE_COUPON:
      return {
        ...state,
        isDeletingCoupons: true,
      };
    case CouponActionTypes.DELETE_COUPON_SUCCESS:
      return {
        ...state,
        isDeletingCoupons: false,
      };
    case CouponActionTypes.DELETE_COUPON_FAILURE:
      return {
        ...state,
        isDeletingCoupons: false,
      };
    case CouponActionTypes.CREATE_COUPON:
      return {
        ...state,
        isCreatingCoupons: true,
      };
    case CouponActionTypes.CREATE_COUPON_SUCCESS:
      return {
        ...state,
        isCreatingCoupons: false,
      };
    case CouponActionTypes.CREATE_COUPON_FAILURE:
      return {
        ...state,
        isCreatingCoupons: false,
      };
    default:
      return state;
  }
};

export default coupons;
