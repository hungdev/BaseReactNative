import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  BackHandler,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppNavigator } from './AppNavigator';
// import * as navActions from '../redux/actions/navActions';
import { rootNavBack } from '../actions/navigationAction'

class Screens extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this._handleHardwareBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this._handleHardwareBackPress);
    }
  }

  _handleHardwareBackPress = () => {
    // const { rootNav } = this.props;
    // console.log(rootNav);
    // if (rootNav.routes.length > 0) {
    //   this.props.rootNavBack();
    //   return true;
    // }
    // BackHandler.exitApp();
    // return false;
    const { nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    this.props.rootNavBack()
    return true;
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#314282' }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <StatusBar backgroundColor="#314282" barStyle="light-content" />
          <AppNavigator />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

const mapDispatchToProps = dispatch => ({
  rootNavBack: () => dispatch(rootNavBack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screens);
