import React from "react";

import SquareSlapItem from "../slaps/square_slap_item";

class SlapsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSlaps();
  }

  render() {
    const { slaps } = this.props;

    return(
      <div className="slap-index" >
        {slaps && Object.keys(slaps).map((id) => (
          <SquareSlapItem key={id} slap={slaps[id]} />
          // <SlapItem key={id} slap={slaps[id]} />
        ))}
      </div>
    )
  }
}

export default SlapsIndex;