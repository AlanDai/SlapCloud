import { connect } from "react-redux";
import { openUserModal } from "../../actions/ui_actions"


import NavBar from "./navbar";

const mapStateToProps = ({ entities, session }) => ({
  username: entities.users[session.id].email
})

const mapDispatchToProps = dispatch => ({
  openUserModal: () => dispatch(openUserModal()),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)