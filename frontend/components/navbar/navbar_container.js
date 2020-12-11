import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openUserModal } from "../../actions/ui_actions";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  sessionId: session.id,
})

const mapDispatchToProps = dispatch => ({
  openUserModal: () => dispatch(openUserModal()),
  logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))