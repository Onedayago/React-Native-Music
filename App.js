/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './App/Store'
import {PersistGate} from 'redux-persist/integration/react'
import AppNav from './App/Container/AppContainer'


const {store, persistor} = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNav/>
        </PersistGate>
      </Provider>
    );
  }
}




