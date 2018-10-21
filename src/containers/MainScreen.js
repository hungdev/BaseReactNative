import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getLogout } from '../actions/loginAction'

class mainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
          title='Logout'
          onPress={() => this.props.getLogout()}
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
    getLogout: () => dispatch(getLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainScreen)