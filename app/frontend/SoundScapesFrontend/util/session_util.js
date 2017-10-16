import * as axios from 'axios';

export const fetchLogin = () => (
  axios.get('/auth/spotify/callback')
);

export const testSpotify = () => {

  const config = {
    headers: {
      'Authorization': "Bearer BQAsuPl0lMOd_SszhuAE1LDBrDYn1Qmfj3fWYfBo-LeEG1F9GbAIB8sFBYS4i9ULzO8KKJlb-bF1tAPjLfwe1bPVyAibzNhKhHZ62rRouPAwVGiA7uEVvI7Rc-N18TsF5eS4pJFyZGlOJ46x9Q",
      'Content-Type': 'application/json'
    }
  };

  const instance = axios.put(
    'https://api.spotify.com/v1/me/player/play?device_id=dc8af959758d56ecb6b19156e0300512301a35e1',
    {
      "context_uri": "spotify:album:2QJmrSgbdM35R67eoGQo4j",
      "offset": {
        "position": 5
      }
    },
    config
  ).then(function (response) {
    console.log(response);
  }).catch((error) => {
    console.log(error);
    console.log(error + " DOOODLES");
  });


};
