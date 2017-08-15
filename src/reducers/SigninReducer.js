import { 
    SIGNIN_EMAIL_CHANGED,
    SIGNIN_PASSWORD_CHANGED,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER
} from '../actions/types';

/* Initial State */
const INITIAL_STATE = {
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGNIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGNIN_USER:
            return { ...state, loading: true, error: '' };
        case SIGNIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGNIN_USER_FAIL:
            return { ...state, loading: false, password: '', error: action.payload };
        default:
            return state;
    }  
};
