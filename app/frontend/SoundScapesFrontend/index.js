import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './store/store';
import {getSoundscapes} from './actions/soundscape_actions';
import fetchSoundscapes from './util/soundscape_api_util';

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

window.getSoundscapes = getSoundscapes;
window.fetchSoundscapes = fetchSoundscapes;

AppRegistry.registerComponent('SoundScapesFrontend', () => Root);
