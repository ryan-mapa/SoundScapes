import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './store/store';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent('SoundScapesFrontend', () => Root);
