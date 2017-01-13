import { combineReducers } from 'redux';
import authentication from '../modules/authentication/reducers/authentication';
import user from '../modules/user/reducers/user';
import coupons from '../modules/coupons/reducers/coupons';

const reducers = {
  authentication,
  user,
  coupons,
};

export default combineReducers(reducers);
