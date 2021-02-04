import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBarContainer from "./navbar/navbar_container";
import ModalContainer from "./modal/modal_container";
import MusicPlayerContainer from "./music_player/music_player_container"

// import LandingPage from "./landing_page";
import DiscoverPage from "./discover/discover_page";
import UploadPage from "./upload/upload_page";

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={ModalContainer} />
    
    <Switch>
      <Route exact path={`${slap.uploader.id}/${slap.name}`} component={ShowPage}/>
      <AuthRoute exact path="/" component={DiscoverPage} />
      <Route path="/discover" component={DiscoverPage} />
      <ProtectedRoute path="/upload" component={UploadPage} />
    </Switch>

    <Route path="/" component={MusicPlayerContainer} />
  </div>
);

export default App;
