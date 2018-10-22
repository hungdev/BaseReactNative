import {
  GO_TO_DETAIL,
  GO_TO_PROFILE,
  ROOT_NAV_BACK,
  GO_TO_LOGIN
} from './actionTypes'
import { NAVIGATION } from './actionTypes'
import Rt from 'reactotron-react-native'

export const goToDetailScreen = (data) => {
  return {
    type: NAVIGATION.DETAIL_SCREEN,
    data
  }
}
export const goToProfileScreen = (data) => {
  return {
    type: GO_TO_PROFILE,
    data
  }
}
export const goToLoginScreen = (data) => {
  return {
    type: GO_TO_LOGIN,
    data
  }
}
export const rootNavBack = (data) => {
  return {
    type: ROOT_NAV_BACK,
    data
  }
}
