import firebase from 'firebase';
import {
    SIGNIN_EMAIL_CHANGED,
    SIGNIN_PASSWORD_CHANGED,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAIL,
    SIGNIN_USER
} from './types';

export const signinEmailChanged = (text) => ({
    type: SIGNIN_EMAIL_CHANGED,
    payload: text
});

export const signinPasswordChanged = (text) => ({
    type: SIGNIN_PASSWORD_CHANGED,
    payload: text
});

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => signinUserSuccess(dispatch, user))
            .catch(error => signinUserFail(dispatch, error));
    }
};

export const signinUserFail = (dispatch, error) => {
    dispatch({ 
        type: SIGNIN_USER_FAIL, 
        payload: error.message
    });
};

export const signinUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNIN_USER_SUCCESS,
        payload: user
    });
};