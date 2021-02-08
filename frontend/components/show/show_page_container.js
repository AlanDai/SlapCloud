import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchSlap } from "../../actions/slap_actions";
import { setCurrentSlap } from "../../actions/music_player_actions";
import ShowPage from "./show_page";

const mapStateToProps = ({ entities, session, ui }, ownProps) => {
  let currUser = null;
  if (session.id) currUser = entities.users[session.id]

  let currSong = null;
  if (ui.musicPlayer) currSong = ui.musicPlayer.curr;

  return {
    slap: entities.slaps[ownProps.match.params.slapId],
    currUser,
    currSong,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSlap: slapId => dispatch(fetchSlap(slapId)),
  setCurrentSlap: slapId => dispatch(setCurrentSlap(slapId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPage))