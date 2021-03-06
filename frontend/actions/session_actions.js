import {signin, signup, signout} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch => {
  signup(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const logIn = user => dispatch => {
  signin(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const logOut = () => dispatch => {
  signout()
    .then( () => dispatch(logoutCurrentUser()));
};
