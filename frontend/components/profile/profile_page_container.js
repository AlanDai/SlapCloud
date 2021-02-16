import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { receiveSlaps } from "../../actions/slap_actions";
import ProfilePage from "./profile_page";

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  receiveSlaps: slaps => dispatch(receiveSlaps(slaps)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));