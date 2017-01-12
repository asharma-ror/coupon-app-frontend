import { combineReducers } from 'redux';
import authentication from '../modules/authentication/reducers/authentication';
import user from '../modules/user/reducers/user';

const reducers = {
  authentication,
  user,
};

export default combineReducers(reducers);
