import React from "react";

import SlapItem from "./slap_item";

class SlapsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSlaps();
  }

  render() {
    const { slaps } = this.props;

    return(
      <div className="slap-index" >
        {slaps && slaps.map((slap, idx) => (
          <SlapItem key={idx} slap={slap} />
        ))}
      </div>
    )
  }
}

export default SlapsIndex;