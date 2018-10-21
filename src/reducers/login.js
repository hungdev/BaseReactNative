import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import Rt from 'reactotron-react-native'
import {
  GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED,
  GET_LOGOUT
} from '../actions/actionTypes'

const initialAuthState = {
  isLoggedIn: false,
  userData: [],
  isFetching: false,
  error: false
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case GET_LOGIN:
      return { ...state, isLoggedIn: true, userData: [], isFetching: true };
    case GET_LOGIN_SUCCESS:
      return { ...state, userData: action.data, isFetching: false }
    case GET_LOGIN_FAILED:
      return { ...state, userData: [], isFetching: false, error: true }


    case GET_LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

