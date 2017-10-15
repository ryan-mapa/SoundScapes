import { RECEIVE_SOUNDSCAPE, RECEIVE_SOUNDSCAPES } from '../actions/soundscape_actions';
import merge from 'lodash/merge';

const SoundscapesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SOUNDSCAPE:
      return action.soundscape;
    case RECEIVE_SOUNDSCAPES:
      return action.soundscapes;
    default:
      return state;
  }
};

export default SoundscapesReducer;
