import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { receiveUser } from '../../actions/user_actions';
import { receiveSlaps } from "../../actions/slap_actions";
import ProfilePage from "./profile_page";

const mapStateToProps = ({ session }) => ({
  currUser: session.id
})

const mapDispatchToProps = (dispatch) => ({
  receiveUser: user => dispatch(receiveUser(user)),
  receiveSlaps: slaps => dispatch(receiveSlaps(slaps)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));