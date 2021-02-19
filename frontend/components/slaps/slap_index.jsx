import React from "react";

import SlapsCarousel from "./slaps_carousel";

class SlapsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSlaps();
  }

  render() {
    const { slaps } = this.props;

    return(
      <div className="slap-index" >
        <div className="slap-index-section">
          <div className="carousel-header">{"More of what you like"}</div>
          <div className="carousel-subheader">{"Suggestions based on what you've liked or played"}</div>
          <SlapsCarousel slaps={Object.values(slaps)} />
        </div>
        <div className="slap-index-section">
          <div className="carousel-header">{"Discover new music"}</div>
          <div className="carousel-subheader">{"A compilation of our picks of the week"}</div>
          <SlapsCarousel slaps={Object.values(slaps).reverse()} />
        </div>
      </div>
    )
  }
}

export default SlapsIndex;