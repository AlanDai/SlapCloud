import { connect } from 'react-redux';
import { fetchSlaps } from '../../actions/slap_actions'

import SlapIndex from './slap_index'

const mapStateToProps = ({ entities }) => ({
  slaps: entities.slaps.slaps,
})

const mapDispatchToProps = dispatch => ({
  fetchSlaps: () => dispatch(fetchSlaps())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlapIndex);