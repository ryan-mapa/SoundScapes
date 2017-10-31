import React from 'react';
import { StyleSheet, Text, Linking, AppRegistry, ScrollView, View, Button, Image } from 'react-native';
import { fetchLogin, testSpotify, refresh } from '../../util/session_util';
// import { fetchCurrentUser } from '../../actions/session_actions';
// import { Linking } from 'RCTLinking';



export default class Login extends React.Component {


  test(e) {
    e.preventDefault();
    console.log('from inside test');
    this.props.fetchCurrentUser();
    // debugger;
    // () => this.dispatch(fetchCurrentUser());
    // fetchCurrentUser();
  }

  componentWilllMount() {
    console.log("component did mount 4");
    // this.fetchCurrentUser();
    debugger;
    // () => this.dispatch(fetchCurrentUser());
  }

  omniauth() {
    Linking.openURL('http://localhost:3000/auth/spotify').then(
      () => {
        console.log("inside then");
        // testSpotify();
      }
    );
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.omniauth}
          title="Login with Spotify from app"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={(e) => this.test(e)}
          title="fetch current user"
          color="#841584"
        />
      </View>
    );
  }
}
