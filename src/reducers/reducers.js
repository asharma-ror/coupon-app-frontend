import { combineReducers } from 'redux';
import authentication from '../modules/authentication/reducers/authentication';
import user from '../modules/user/reducers/user';
import coupons from '../modules/coupons/reducers/coupons';
import { LOGOUT } from '../modules/authentication/actions/loginAction';

const reducers = {
  authentication,
  user,
  coupons,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
