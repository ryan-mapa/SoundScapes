import Discover from './discover';

import { connect } from 'react-redux';
import { getSoundscapes } from '../../actions/soundacape_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    soundscapes: Object.values(state.entities.soundscapes),
    searchScapes: ownProps.searchScapes
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    getSoundscapes: () => dispatch(getSoundscapes())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
