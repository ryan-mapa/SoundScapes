import axios from 'axios';

export const fetchSoundscapes = data => (
  axios.get('api/soundscapes')
);

export const fetchSoundscape = soundscapeId => (
  axios.get(`api/soundscapes/${soundscapeId}`)
);

export const createSoundscape = soundscape => (
  axios.post('api/soundscapes', soundscape)
);
