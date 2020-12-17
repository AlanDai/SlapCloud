import React from "react";

// import SlapItem from "./slap_item";

class SlapsIndex extends React.Component {
  render() {
    const { slaps } = this.props;

    return(
      <div>
        {slaps.map(slap => (
          // <SlapItem slap={slap} />
          <h1>{slap.name}</h1>
        ))}
      </div>
    )
  }
}

export default SlapsIndex;