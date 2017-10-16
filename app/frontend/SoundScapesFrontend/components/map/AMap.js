import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  position: null,
  error: null,
});


export default class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // markers: [
      //   {
      //     latlng: {latitude: 37.793688, longitude: -122.404568},
      //     title: "first",
      //     description: "this is a marker",
      //     // image: require('../../assets/images/flavortown.png')
      //   },
      //   {
      //     latlng: {latitude: 37.803413, longitude: -122.408403},
      //     title: "second",
      //     description: "another marker",
      //     // image: require('../../assets/images/flavortown.png')
      //   },
      //   {
      //     latlng: {latitude: 37.807124, longitude: -122.417313},
      //     title: "third",
      //     description: "third marker",
      //     // image: require('../../assets/images/flavortown.png')
      //   }
      // ],
      markers: [],

      // polyline: {
      //   coordinates: [{latitude: 37.793688, longitude: -122.404568}, {latitude: 37.803413, longitude: -122.408403}, {latitude: 37.807124, longitude: -122.417313}],
      //   strokeWidth: 3,
      //   strokeColor: '#4286f4',
      //
      // },

      polylines: [],
      soundscapes: {},

      position: null,
      error: null,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("map received props");
    const markersFromProps = [];
    const polylinesFromProps = [];
    console.log("soundscapes:", nextProps.soundscapes);
    nextProps.soundscapes.forEach(soundscape => {
      const coordinates = [];
      soundscape.soundspots.forEach(soundspot => {
        const newMarker = {
          latlng: {
            latitude: soundspot.latitude,
            longitude: soundspot.longitude
          }
        };
        const newCoords = {
          latitude: soundspot.latitude,
          longitude: soundspot.longitude
        };
        markersFromProps.push(newMarker);
        coordinates.push(newCoords);

      });
      console.log("markersFromProps:", markersFromProps);
      console.log("coordinates:", coordinates);
      polylinesFromProps.push(coordinates);
      console.log("polylinesFromProps:", polylinesFromProps);
    });

    console.log("polylinesFromProps2:", polylinesFromProps);
    console.log("markersFromProps2:", markersFromProps);

    this.setState({
      markers: markersFromProps,
      polylines: polylinesFromProps
    });
    console.log("map state:", this.state);
    this.colorPicker = this.colorPicker.bind(this);
  }

  componentWillMount() {
    console.log("map mounted");


    console.log("geolocation:", navigator.geolocation);
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        // console.log("position:", position.coords);
        this.setState({
          position: position.coords,
          error: null,
        });
        // console.log("region:", this.state.region);
        this.onRegionChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );
  }

  componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchId);
  }

  onRegionChange(region) {
    this.refs.map.animateToRegion(region);
  }

  colorPicker(num) {
    const colors = [
      '#1bc467',
      '#4286f4',
      '#fcf932',
      '#842caa'
    ];

    return colors[num];
  }

  render() {
    console.log("state:", this.state);
    return(
      <MapView
        ref="map"
        style={styles.map}
        initialRegion={this.state.region}
        // onRegionChange={this.onRegionChange}
      >
      {this.state.markers.map(marker => {
        return(<MapView.Marker
          ref="current-position"
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />);
      })}
      {this.state.polylines.map(polyline => {
        const colorNum = Math.floor(Math.random() * 4);
        return(
          <MapView.Polyline
            coordinates={polyline}
            strokeColor={this.colorPicker(colorNum)}
            strokeWidth={3}
            />
        );
      })}
      <MapView.Marker
        coordinate={this.state.position}
        image={require('../../frontend_assets/images/current_location_marker.png')}
      />
      </MapView>
    );
  }
}
