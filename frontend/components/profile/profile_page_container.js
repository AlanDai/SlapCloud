import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProfilePage from "./profile_page";

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));