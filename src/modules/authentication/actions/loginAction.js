import { postApiAction } from '../../../api/apiActions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GOT_TOKEN = 'GOT_TOKEN';

export const LOGOUT = 'LOGOUT';

export const login = (email, password) => (
  postApiAction({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    url: '/api/v1/auth/login',
    body: {
      email,
      password,
    },
  })
);

export const tokenAction = token => ({
  type: GOT_TOKEN,
  token,
});

export const logoutAction = token => ({
  type: LOGOUT,
  token,
});
