import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { goToLoginScreen } from '../actions/navigationAction'

class profileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title='Button'
          onPress={() => this.props.goToLoginScreen()}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    // bookMarkList: state.bookmark.bookMarkList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToLoginScreen: () => dispatch(goToLoginScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(profileScreen)