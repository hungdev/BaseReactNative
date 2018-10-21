import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers'
//Redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas';

import { REHYDRATE, PURGE, persistCombineReducers, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';
import RootNav from './src/navigators';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [                    
  //   'accountReducer'
  // ],
  // blacklist: [
  //   'progressReducer',
  //   'videoReducers',
  //   'accountReducer'
  // ]
}

// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer, undefined, compose(
  applyMiddleware(sagaMiddleware, middleware),
  // autoRehydrate()
));
let persistor = persistStore(store)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNav />
        </PersistGate>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);
