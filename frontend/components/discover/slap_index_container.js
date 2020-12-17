import { connect } from 'react-redux';

import SlapIndex from './slap_index'

const mapStateToProps = ({ entities }) => ({
  slaps: entities.slaps,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SlapIndex);