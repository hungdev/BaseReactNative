import {
  GET_LOGIN,
  GET_LOGOUT
} from './actionTypes'
import Rt from 'reactotron-react-native'

export const getLogin = (data) => {
  return {
    type: GET_LOGIN,
    data
  }
}
export const getLogout = (data) => {
  return {
    type: GET_LOGOUT,
    data
  }
}
