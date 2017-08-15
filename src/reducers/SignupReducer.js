import {
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_PASSWORD_DOESNT_MATCH,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER,
} from '../actions/types';

/* Initial State */
const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case SIGNUP_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNUP_CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case SIGNUP_PASSWORD_DOESNT_MATCH:
      return { ...state, error: 'Your passwords doesn\'t match' };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNUP_USER_FAIL:
      return { ...state, loading: false, password: '', confirmPassword: '', error: action.payload };
    default:
      return state;
  }
};
