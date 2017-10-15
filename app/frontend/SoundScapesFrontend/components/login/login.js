import React from 'react';
import { StyleSheet, Text, Linking, AppRegistry, ScrollView, View, Button, Image } from 'react-native';
import { fetchLogin } from '../../util/session_util';
// import { Linking } from 'RCTLinking';

export default class Login extends React.Component {

  omniauth() {
    Linking.openURL('http://localhost:3000/auth/spotify/callback');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.omniauth}
          title="Login with Spotify"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
