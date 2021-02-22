import { connect } from 'react-redux';
import { emailUncheck } from '../../actions/session_actions';
import { fetchSlaps } from '../../actions/slap_actions';

import SlapIndex from './slap_index'

const mapStateToProps = ({ entities }) => ({
  slaps: entities.slaps,
})

const mapDispatchToProps = dispatch => ({
  fetchSlaps: () => dispatch(fetchSlaps()),
  emailUncheck: () => dispatch(emailUncheck())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlapIndex);