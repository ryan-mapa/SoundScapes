import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './components/login/login';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

/// components
import Profile from './components/profile/profile';
import DiscoverContainer from './components/discover/discover_container';
import Search from './components/search/search';
import Create from './components/create/create';

import AMap from './components/map/AMap';

const MainNav = TabNavigator({
  Profile: {
    screen: Profile
  },
  Discover: {
    screen: DiscoverContainer
  },
  Search: {
    screen: Search
  },
  Create: {
    screen: Create
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#666666',
    inactiveBackgroundColor: '#bfbfbf',
    labelStyle: {
       fontSize: 18,
     },
     style: {
       backgroundColor: '#d3d3d3'
     },
     indicatorStyle: {
       backgroundColor: '#1485CC'
     }
  }
});



export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#f7f7f7', flex: 8}}>
        <Login />
        <MainNav />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
