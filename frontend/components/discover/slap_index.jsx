import React from "react";

import SlapItem from "../slaps/slap_item";

class SlapsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSlaps();
  }

  render() {
    const { slaps } = this.props;

    return(
      <div className="slap-index" >
        {slaps && Object.keys(slaps).map((id) => (
          <SlapItem key={id} slap={slaps[id]} />
        ))}
      </div>
    )
  }
}

export default SlapsIndex;