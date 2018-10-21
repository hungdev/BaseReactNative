import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import Rt from 'reactotron-react-native'

import login from './login'
import nav from './navigation'

const AppReducer = combineReducers({
  nav,
  login,
});

export default AppReducer;
