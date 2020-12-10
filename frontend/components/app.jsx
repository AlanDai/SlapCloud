import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute } from '../util.route_util';
import LandingPage from "./landing_page";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <Route path="/" render={<h1>Discover</h1>}/>
    </Switch>
  </div>
)


export default App;
