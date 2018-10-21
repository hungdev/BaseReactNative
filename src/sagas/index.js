import { fork } from 'redux-saga/effects'
import * as loginSaga from './loginSaga'

export default function * rootSaga () {
  yield [
    fork(loginSaga.watchGetLogin)
  ]
}