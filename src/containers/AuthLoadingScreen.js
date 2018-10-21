import React from 'react'
import { Button, View, Text, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getLogin } from '../actions/loginAction'

class profileScreen extends React.Component {
  componentWillMount(){
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Screen</Text>
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
    getLogin: () => dispatch(getLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(profileScreen)