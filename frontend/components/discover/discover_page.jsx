import React from "react";

// import SlapCarouselContainer from '../slaps/slap_carousel_container';
// import SquareSlapItem from '../slaps/square_slap_item.jsx';
import SlapIndexContainer from "./slap_index_container";

const DiscoverPage = (props) => (
  <div id="discover-page">
    <div>
      <h1>More of what you like</h1>
      <h2>Suggestions based on what you've liked or played</h2>
      
    </div>
    <SlapIndexContainer />
  </div>
)

export default DiscoverPage;