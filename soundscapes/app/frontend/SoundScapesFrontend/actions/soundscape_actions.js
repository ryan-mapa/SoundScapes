import * as APIUtil from '../util/soundscape_api_util';

export const RECEIVE_SOUNDSCAPE = 'RECEIVE_SOUNDSCAPE';
export const RECEIVE_SOUNDSCAPES = 'RECEIVE_SOUNDSCAPES';
export const RECEIVE_SOUNDSCAPE_ERRORS = 'RECEIVE_SOUNDSCAPE_ERRORS';

export const receiveSoundscape = soundscape => ({
  type: RECEIVE_SOUNDSCAPE,
  soundscape
});

export const receiveSoundscapes = soundscapes => ({
  type: RECEIVE_SOUNDSCAPES,
  soundscapes
});

export const receiveErrors = errors => ({
  type: RECEIVE_SOUNDSCAPE_ERRORS,
  errors
});

export const getSoundscape = soundscapeId => dispatch => (
  APIUtil.fetchSoundscape(soundscapeId)
    .then(soundscape => dispatch(receiveSoundscape(soundscape)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const getSoundscapes = filters => dispatch => (
  APIUtil.fetchSoundscapes(filters)
    .then(soundscapes => dispatch(receiveSoundscapes(soundscapes)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const createSoundscape = soundscape => dispatch => (
 APIUtil.createSoundscape(soundscape).then(newScape => {
 	dispatch(receiveSoundscape(newScape));
    return newScape;
 }, err => (dispatch(receiveErrors(err.responseJSON))))
);
