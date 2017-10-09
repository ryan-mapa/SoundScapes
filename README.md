# SoundScapes

## Background and Overview

SoundScapes is an iOS mobile application which allows users to map their
favorite tunes to a geographic location. Users can curate experiences
consisting of place and music pairings to share with others.

While apps such as Spotify and Google Maps have never made it easier to
listen to music or navigate the streets, there remains a lack of ability
to connect people through their collective associations of music and
places. With SoundScapes, one may finally step into the shoes of their
friends, significant others, or even famous celebrities through the
moods their music evokes.

## Functionality & Minimum Viable Product

This app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation:

- [ ] OAuth with Spotify
- [ ] Demo for showcasing
- [ ] User Profiles, view of favorite/creates SoundScapes
- [ ] Discovery homepage that finds SoundScapes for current area
- [ ] Creating new SoundScapes
- [ ] Search for other users, view their favorite/created SoundScapes
- [ ] Production README

### Bonus

- [ ] String multiple points together to create successive walking playlists
- [ ] Search by location, paths, destinations

## Design Documents

### Wireframes

# Login
![login](./wireframes/Login.png)

# Homepage/Discovery
![discovery](./wireframes/Discovery.png)

#SoundScape View
![soundscape](./wireframes/SoundscapeView.png)

# User Profile
![user profile](./wireframes/HomepageProfile.png)



* [API Endpoints][api_endpoints]
* [React Components][component_hierarchy]
* [Sample Schema][sample_schema]
* [Sample State][sample_state]


## Group Members & Work Breakdown

Our group consists of four members: Ryan Mapa, Parker Fritch, David Banks, Michael Wei

Ryan's primary responsibilities will be:
* Timeline manager
* OAuth researcher/engineer
* Setting up user auth
* Login View
* User discovery

Parker's primary responsibilities will be:
* Google Maps API researcher/engineer
* Setting up Google Maps API hooks
* Discovery and map view
* Backend SoundScape storage

David's primary responsibilities will be:
* React Native engineer
* Working with Ryan to implement the remainder of backend architecture
* SoundScapes index and show views
* Edit README

Michael's primary responsibilities will be:
* Spotify API researcher/engineer
* Setting up Spotify API hooks
* Create SoundScapes Process
* Everything else

## Technologies and Technical Challenges

Rails backend
OAuth
React Native
Spotify API
Google Maps API

This mobile Android application will be built using a Rails backend with a React Native frontend, integrating APIs from Google Maps and Spotify.
+ OAuth simultaneously connects us with the data we need, while eliminating requirements for local Auth
+ Pulling data from Google and Spotify lets us stitch together SoundScapes
+ React Native allows us to interact smoothly with native code if we need to
+ React Native's cross-platform functionality will be easily applicable to other mobie operating systems

The technical challenges for this application will be:

+ Pulling the relevant information from Spotify
  + Current song
  + Song changes
+ Google Maps Api
  + Port web app knowledge over to Android
  + Get current device location
  + Filter map by nearby SoundScapes
  + Draw Polylines from current location in Realtime
  + On song change, create a new SoundSpot at current location, and change Polyline color
  + Figure out how to save SoundScape information
+ React Native
  + Figure out differences from Reactjs
+ OAuth
  + How do we do it?


## Technology details of Our Stack


### Google Maps API
[Google Maps API](https://developers.google.com/maps/documentation/android-api/start)

+ Allows us to create maps with Google data

+ Libraries like Drawing and Places expand the functionality, allowing us to draw lines

### React Native
[react native](https://github.com/facebook/react-native)
+ React Native library lets you build mobile apps using Javascript and React, indistinguishable from apps built with Obj-C, Swift, or Java.

### Spotify API

[node.js](https://github.com/nodejs/node)
+ Provides data on the song a user is currently playing



## Implementation Timeline

### Phase 1: Learn Technologies (3 days)

+ As a group we will break down our desired core features and discuss
backend architecture.

+ Group members will be focused primarily on learning ReactNative and
gathering information on the Google and Spotify APIs, making sure the
agreed-upon features are viable.

+ Plan a schema and state shape.

### Phase 2: Backend (2 days)

+ Write backend and implement Spotify OAuth (Ryan, David)

+ More Google, Spotify API research (Parker, Michael)

### Phase 3: Frontend (2 days)

+ Begin frontend development, implementation of APIs.

+ All backend schema tables being reflected in frontend

### Phase 4: MVPs (3 days)

+ User profiles with filtered indices of SoundScapes, Spotify follows

+ Map view finds SoundScapes only for current area
