import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import NavBarContainer from "./navbar/navbar_container";
import ModalContainer from "./modal/modal_container";
import LandingPage from "./landing_page";
import DiscoverPage from "./discover/discover_page";

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={NavBarContainer} />
      <Route path="/" component={ModalContainer} />
      <AuthRoute exact path="/" component={LandingPage} />
      <Route path="/discover" component={DiscoverPage} />
    </Switch>
  </div>
);

export default App;
