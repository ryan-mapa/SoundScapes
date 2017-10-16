import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const fetchCurrentUser = () => dispatch => {
  console.log("inside fetchCurrentUser");
  return (
  SessionUtil.fetchCurrentUser().then(currentUser => dispatch(receiveCurrentUser(currentUser)))
  );
};
