import {CLEAR_AUTH_STATE, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER, SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS} from '../../constants/actionTypes';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false
      }
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
