import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';
import ProfileScreen from '../containers/ProfileScreen';
import RootNavigator from './Router'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

// const RootNavigator = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen },
// });

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
