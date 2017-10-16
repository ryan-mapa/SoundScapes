import * as axios from 'axios';

export const fetchSoundscapes = data => (
  axios.get('https://soundscapesios.herokuapp.com/api/soundscapes', data)
);

export const fetchSoundscape = soundscapeId => (
  axios.get(`https://soundscapesios.herokuapp.com/api/soundscapes/${soundscapeId}`)
);

export const createSoundscape = soundscape => (
  axios.post('https://soundscapesios.herokuapp.com/api/soundscapes', soundscape)
);
