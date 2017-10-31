import * as axios from 'axios';

export const fetchLogin = () => (
  axios.get('/auth/spotify/callback')
);

// export const fetchCurrentUser = () => (
//   axios.get('me')
// );

export const fetchCurrentUser = () => {

  console.log("from session utils");
  return (
    axios.get('me')
  );
};

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
    // refresh()
  });
};

export const refresh = () => {
  // const config = {
  //   headers: {
  //     'Authorization': "Basic 2d9b5153c47946eea1f7af099022b036:59bb6f06609348cb841ce36a728f7594",
  //     'Content-Type': 'application/json'
  //   },
  //   data: {
  //     'grant_type': 'refresh_token',
  //     'refresh_token': 'AQAgYrVKac1jKlA_0AkgpgJyqCE5akcHXkcZWPUL-pVNlhUwhrGQbgfoYk6R4IJZlewYBfDaQ_cDsSyTNFsT4GBy_J_Tk4A2XIi0bzUPvN4jS-W8feYR2E_03ESqnYJlCxM'
  //   }
  // };
  // let refreshToken = "AQBfF5l2vqF-erLgsErP-feQxhW_CKw1GVRkAYbUaOxBowoE75giXNyTw-CAqYTdexf2PjyPIadwAd4B4WDI2OT2oAiEm2NbrOcEenk_xhko7wDgSvr2Vt09eUgIIOPK5Sk";
  axios.post(
    'https://accounts.spotify.com/api/token',
    {
      headers: {
        'Authorization': "Basic 2d9b5153c47946eea1f7af099022b036:59bb6f06609348cb841ce36a728f7594",
        // 'Content-Type': 'application/json'
      },
      data: {
        'grant_type': 'refresh_token',
        'refresh_token': 'AQBTzpcDDWp44g8Az2pMl30hs_aunId4ZcQFhSJqL77h2VxTi9ZltT_g5q4r4ZnapuD5ju0SC66vbwxhNi76uNE77y5EKN86kS7j7VS59NS6H6ZObyHFSkDds3ID30w0k9c'
      }
    }
    // {
    //   access_token: "BQAz18a1ejWtg0dreugb-2yZtivi25r1BKv-qhs2VInIBPH2kLdHXSd1rhKEJmh95BiKrXdrmVqkwXOluIXKzJpS1oCJzrBbhghyzAoffZRKXG4_XP1T2b5NhSmIF2l-3nZlz0wPMDb0_Lse4x-kPJfev-yMrqYV-1uSGtjC0LU7h1issLw",
    //   token_type: "Bearer",
    //   scope: "user-read-private user-read-email",
    //   expires_in: 3600
    // }
  ).then(function (response) {
    console.log(response);
  }).catch((error) => {
    console.log(error);
    console.log(error + " NOODLES");
  });
};


// curl -X POST "https://accounts.spotify.com/api/token" -H "Authorization: Basic 2d9b5153c47946eea1f7af099022b036:59bb6f06609348cb841ce36a728f7594" -d "grant_type: refresh_token" -d "refresh_token: AQBTzpcDDWp44g8Az2pMl30hs_aunId4ZcQFhSJqL77h2VxTi9ZltT_g5q4r4ZnapuD5ju0SC66vbwxhNi76uNE77y5EKN86kS7j7VS59NS6H6ZObyHFSkDds3ID30w0k9c"


// curl -X POST "https://accounts.spotify.com/api/token" -H "grant_type=refresh_token" -d "refresh_token=AQBTzpcDDWp44g8Az2pMl30hs_aunId4ZcQFhSJqL77h2VxTi9ZltT_g5q4r4ZnapuD5ju0SC66vbwxhNi76uNE77y5EKN86kS7j7VS59NS6H6ZObyHFSkDds3ID30w0k9c"
//
// {
//    "access_token": "BQBdRQlDwyFnNSflD4NAA4ijjtC_xQrg0rHLdSgu5zRfbozRbOrCsLNdL1Fcj24DlO6DuOcVOp3zSOoQrGBjr2Nv81_qDVYyNMmYcDatUCu84dSGxjTa9LqLyJwvblTqhhDagaQnweMqOkhRRvM8U6X3TyOiIJJKvuNXI6Dz62dbq-DhllQ",
//    "token_type": "Bearer",
//    "scope": "user-read-private user-read-email",
//    "expires_in": 3600
// }



// {"access_token": "BQAz18a1ejWtg0dreugb-2yZtivi25r1BKv-qhs2VInIBPH2kLdHXSd1rhKEJmh95BiKrXdrmVqkwXOluIXKzJpS1oCJzrBbhghyzAoffZRKXG4_XP1T2b5NhSmIF2l-3nZlz0wPMDb0_Lse4x-kPJfev-yMrqYV-1uSGtjC0LU7h1issLw",
// "token_type": "Bearer",
// "scope": "user-read-private user-read-email user-modify-playback-state", "expires_in": 3600 }
