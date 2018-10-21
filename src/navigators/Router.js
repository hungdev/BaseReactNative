import React from 'react'
import { Text, Animated, Easing, TouchableOpacity, Image, View, Platform } from 'react-native'
import {
  StackNavigator, createStackNavigator, TabNavigator, TabBarBottom, NavigationActions,
  createBottomTabNavigator, SafeAreaView, createSwitchNavigator
} from 'react-navigation'
import HotScreen from '../containers/HotScreen'
import AllScreen from '../containers/AllScreen'
import DetailScreen from '../containers/ProfileScreen'
import LoginScreen from '../containers/LoginScreen'
import MainScreen from '../containers/MainScreen'
import AuthLoadingScreen from '../containers/AuthLoadingScreen'


const TabHotScreen = StackNavigator({
  Main: {
    screen: HotScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  }
})

const TabAllScreen = StackNavigator({
  Main: {
    screen: AllScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  }
})

const tabNav = createBottomTabNavigator({
  HotScreen: {
    screen: TabHotScreen,
    path: '/hot',
    navigationOptions: {
      title: 'Welcome',
      tabBarLabel: 'HOT',
    },
  },
  AllScreen: {
    screen: TabAllScreen,
    path: '/all',
    navigationOptions: {
      title: 'ALL',
    },
  },
},
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      labelStyle: {
      },
      style: {

      },
      tabStyle: {
        paddingTop: 5,
      },
      iconStyle: {
      }
    }
  }
);

const AppStack = createStackNavigator({
  Main: MainScreen,
  Other: DetailScreen
});
const AuthStack = createStackNavigator({ Login: LoginScreen });

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  // AuthLoading: AuthLoadingScreen,
  // Main: MainScreen,
  // Login: LoginScreen,
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: DetailScreen },
}, {
    // initialRouteName: 'AuthLoading',
    navigationOptions: {
      // header: null,
      // headerTitle: <CustomNavbar />
    },
  })

export default PrimaryNav
