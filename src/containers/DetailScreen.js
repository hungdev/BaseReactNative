import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { goToProfileScreen } from '../actions/navigationAction'

class profileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
          title='goToProfileScreen'
          onPress={() => this.props.goToProfileScreen()}
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
    goToProfileScreen: () => dispatch(goToProfileScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(profileScreen)