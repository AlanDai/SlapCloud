import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBarContainer from "./navbar/navbar_container";
import ModalContainer from "./modal/modal_container";
import LandingPage from "./landing_page";
import DiscoverPage from "./discover/discover_page";
import UploadPage from "./upload/upload_page";
import SlapIndexContainer from "./slaps/slaps_index_container";

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={ModalContainer} />
    <AuthRoute exact path="/" component={LandingPage} />
    <Route path="/discover" component={DiscoverPage} />
    <ProtectedRoute path="/upload" component={UploadPage} />
    <Route path="/slaps" component={SlapsIndexContainer} />
  </div>
);

export default App;
