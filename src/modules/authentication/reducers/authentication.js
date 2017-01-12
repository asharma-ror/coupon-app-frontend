import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginAction';

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
        token: action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authentication;
