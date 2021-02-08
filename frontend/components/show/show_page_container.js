import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchSlap } from "../../actions/slap_actions";
import ShowPage from "./show_page";

const mapStateToProps = ({ entities }, ownProps) => {
  const { slaps } = entities;

  return {
    slap: slaps[ownProps.match.params.slapId]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSlap: slapId => dispatch(fetchSlap(slapId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPage))