import { User } from '../../../constants/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    user: data.user,
    token: data.token,
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function login(token, provider) {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      const data = await User.login({ token, provider });
      // because of await once the previous line is done it jumps to the next line.
      return dispatch(loginSuccess(data));
    } catch (error) {
      return dispatch(loginError(error));
    }
  };
}
