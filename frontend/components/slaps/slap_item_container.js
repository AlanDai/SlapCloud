import { connect } from 'react-redux';
import SlapItem from './slap_item';

const mapStateToProps = ({ session }) => ({
  currUser: session.id,
})

export default connect(mapStateToProps)(SlapItem);