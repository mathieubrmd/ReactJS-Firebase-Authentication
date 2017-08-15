import firebase from 'firebase';
import {
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_PASSWORD_DOESNT_MATCH,
} from './types';

export const signupEmailChanged = text => ({
  type: SIGNUP_EMAIL_CHANGED,
  payload: text,
});

export const signupPasswordChanged = text => ({
  type: SIGNUP_PASSWORD_CHANGED,
  payload: text,
});

export const signupConfirmPasswordChanged = text => ({
  type: SIGNUP_CONFIRM_PASSWORD_CHANGED,
  payload: text,
});

export const signupUserFail = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: error.message,
  });
};

export const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user,
  });
};

export const signupUser = ({ email, password, confirmPassword }) => (dispatch) => {
  if (password !== confirmPassword) {
    dispatch({ type: SIGNUP_PASSWORD_DOESNT_MATCH });
    return;
  }
  dispatch({ type: SIGNUP_USER });
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => signupUserSuccess(dispatch, user))
    .catch(error => signupUserFail(dispatch, error));
};
