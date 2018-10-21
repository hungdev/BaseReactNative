import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import Rt from 'reactotron-react-native'

import { RootNavigator } from '../navigators/AppNavigator';

import {
  GET_LOGIN, GET_LOGOUT
} from '../actions/actionTypes'

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case GET_LOGIN:
      nextState = RootNavigator.router.getStateForAction(
        // NavigationActions.back(),
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    case GET_LOGOUT:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

