import { combineReducers } from 'redux';
import SigninReducer from './SigninReducer';
import SignupReducer from './SignupReducer';

export default combineReducers({
  signin: SigninReducer,
  signup: SignupReducer,
});
