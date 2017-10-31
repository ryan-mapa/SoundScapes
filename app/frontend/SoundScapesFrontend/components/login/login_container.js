import Login from './login';

import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // soundscapes: Object.values(state.entities.soundscapes),
    // searchScapes: ownProps.searchScapes

  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  });
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
