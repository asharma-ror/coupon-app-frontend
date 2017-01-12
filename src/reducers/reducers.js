import { combineReducers } from 'redux';
import authentication from '../modules/authentication/reducers/authentication';

const reducers = {
  authentication,
};

export default combineReducers(reducers);
