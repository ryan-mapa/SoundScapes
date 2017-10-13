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
  NativeModules,
  Linking
} from 'react-native';

// debugger;
var SpotifyAuth = NativeModules.SpotifyAuth;

class logIn extends Component {
  componentWillMount() {
    console.log(NativeModules);
    return SpotifyAuth.initWithCredentials(
      "2d9b5153c47946eea1f7af099022b036",
      "http://localhost:3000/spotifydeeplink",
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
          console.log(error);
        }
      }
    );
  }

  componentDidMount() {
    Linking.getInitialURL().then(url => {
      console.log('intiaial url is:', url);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>
          Welcome to SoundScapes!
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyAuth.loggedIn(res => {
              console.warn(res);
              console.log(res);
              debugger;
              if(!res) {
                debugger;
                SpotifyAuth.startAuthenticationFlow(error => {
                  if(!error) {
                    debugger;
                    this.props.navigator.replace({
                      component: logInSuccess,
                      title: "Success"
                    });
                  }
                  else {
                    debugger;
                    alert(error);
                  }
                });
              }
              else {
                console.log("here");
                debugger;
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

  componentDidMount() {
    console.log("MOUNTED");
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log("Monkeys in handleopen");
    console.log(event.url);
  }

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
