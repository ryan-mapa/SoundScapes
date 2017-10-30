import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (prevState = {currentUser: "wrong"}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, prevState, {currentUser: "action.currentUser"});
    default:
      return prevState;
  }
};

export default SessionReducer;
