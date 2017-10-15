import { combineReducers } from 'redux';
import SoundscapesReducer from './soundscapes_reducer';

export default combineReducers({
  soundscapes: SoundscapesReducer
});
