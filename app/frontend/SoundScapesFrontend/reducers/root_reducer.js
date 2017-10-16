import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  ui: uiReducer
});
