import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';

// debugger;
var SpotifyAuth = NativeModules.SpotifyAuth;

class logIn extends Component {
  componentWillMount() {
    console.log(NativeModules);
    return SpotifyAuth.initWithCredentials(
      "28d14392889b49b687084edd83dbc798",
      "soundscapes://redirectafterlogin",
      [
        "streaming",
        "playlist-read-private",
        "playlist-read-collaborative",
        "user-follow-read",
        "user-library-read",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing"
      ],
      error => {
        if (error) {
          alert(error);
        }
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>
          It's SoundScapes!
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyAuth.loggedIn(res => {
              console.warn(res)
              if(!res) {
                SpotifyAuth.startAuthenticationFlow(error => {
                  if(!error) {
                    this.props.navigator.replace({
                      component: logInSuccess,
                      title: "Success"
                    });
                  }
                  else {
                    alert(error);
                  }
                });
              }
              else {
                this.props.navigator.replace({
                  component: logInSuccess,
                  title: "Success"
                });
              }
            })
          }}
        >
          <Image
            resizeMode={"contain"}
            style={styles.image}
            source={require("./assets/login-button.png")}/>
        </TouchableHighlight>
      </View>
    );
  }
}

class logInSuccess extends Component {
  componentDidMount() {
    SpotifyAuth.initialized(error => {
      if(error) {
        console.warn(error);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>
          Log In Success!
        </Text>
        <Text style={styles.normalText}>
          Select a song to start!
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyAuth.playSpotifyURI("spotify:track:12x8gQl2UYcQ3tizSfoPbZ", 0, 0.0, error => {
              if(error) {
                console.error("Something went wrong");
              }
            });
          }}>
          <Text style={styles.btnSong}>
            1. Sheen - Xeno & Oaklander
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyAuth.playSpotifyURI("spotify:track:0U0ldCRmgCqhVvD6ksG63j", 0, 0.0, (error) => {
              if(error) {
                console.error('Something went wrong');
              }
            });
          }}>
          <Text style={styles.btnSong}>
            2. Nightcall - Kavinsky
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyAuth.playbackState(res => {
              if(res.isPlaying) {
                SpotifyAuth.setIsPlaying(false, error => {
                  if(error) {
                    console.warn("Pause", error);
                  }
                });
              }
              else {
                SpotifyAuth.setIsPlaying(true, error => {
                  if(error) {
                    console.warn("Play", error)
                  }
                });
              }
            });
          }}>
          <Text style={style.btnText}>
            Play/Pause
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class spotifyModule extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: logIn,
          title: "Log In"
        }}
        style={{flex: 1}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 45,
    borderRadius: 64
  },
  image: {
    width: 250,
    height: 50
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnSong: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },

});

AppRegistry.registerComponent('soundscapes_frontend', () => spotifyModule);
