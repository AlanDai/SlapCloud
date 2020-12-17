import { connect } from 'react-redux';

import SlapsIndex from './slaps_index'

const mapStateToProps = ({ entities }) => ({
  slaps: entities.slaps
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SlapsIndex);