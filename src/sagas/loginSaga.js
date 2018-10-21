import {
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
} from '../actions/actionTypes'

import { put, takeLatest, call, throttle, takeEvery, select } from 'redux-saga/effects'

import * as api from './api'

import Rt from 'reactotron-react-native'

function* callGetLogin(action) {
  try {
    const data = yield call(api.getLogin, action.data)
    yield put({ type: GET_LOGIN_SUCCESS, data: data.data })
  } catch (error) {
    yield put({ type: GET_LOGIN_FAILED, error })
  }
}
export function* watchGetLogin() {
  yield takeLatest(GET_LOGIN, callGetLogin)
}

// get token and set token
// const token = yield select(state => state.login.authCode)
//api.setToken(token)