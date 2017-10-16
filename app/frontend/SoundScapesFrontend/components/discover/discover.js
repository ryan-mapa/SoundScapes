import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image } from 'react-native';
import AMap from '../map/AMap';

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("discover mounted");
    this.props.getSoundscapes();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AMap soundscapes={ this.props.soundscapes }/>
      </View>
    );
  }
}
