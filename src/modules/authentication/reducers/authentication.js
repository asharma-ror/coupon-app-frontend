import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, GOT_TOKEN } from '../actions/loginAction';

const intialState = {
  isLoading: false,
  token: null,
};

const authentication = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GOT_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default authentication;
