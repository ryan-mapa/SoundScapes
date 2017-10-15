import axios from 'axios';

export const fetchLogin = () => (
  axios.get('/auth/spotify/callback')
);
