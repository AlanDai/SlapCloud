import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBarContainer from "./navbar/navbar_container";
import ModalContainer from "./modal/modal_container";
import MusicPlayerContainer from "./music_player/music_player_container"

// import LandingPage from "./landing_page";
import DiscoverPage from "./discover/discover_page";
import UploadPage from "./upload/upload_page";
import ShowPageContainer from "./show/show_page_container";
import ProfilePageContainer from "./profile/profile_page_container";

const App = () => (
  <div id="app">
    <div id="background" />
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={ModalContainer} />
    
    <Switch>
      <Route exact path="/slap/:slapId" component={ShowPageContainer}/>
      <AuthRoute exact path="/" component={DiscoverPage} />
      <Route path="/discover" component={DiscoverPage} />
      <ProtectedRoute path="/upload" component={UploadPage} />
      <Route exact path="/profile/:userId" component={ProfilePageContainer} />
    </Switch>

    <Route path="/" component={MusicPlayerContainer} />
  </div>
);

export default App;
