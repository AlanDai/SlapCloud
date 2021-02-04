import React from "react";

import SlapIndexContainer from "../slaps/slap_index_container";

const DiscoverPage = (props) => (
  <div id="discover-page">
    <div>
      <h1>More of what you like</h1>
      <h2>Suggestions based on what you've liked or played</h2>
      <SlapIndexContainer />
    </div>
  </div>
)

export default DiscoverPage;