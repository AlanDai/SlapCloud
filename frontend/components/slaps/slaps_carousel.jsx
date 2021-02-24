import React from 'react';

import SquareSlapItem from './square_slap_item';

class SlapsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { slaps } = this.props;
    let songIds = slaps.map(slap => slap.id);

    return (
      <div className="slap-carousel">
        <div className="slap-carousel-content">
          {slaps && slaps.map((slap, idx) => (<SquareSlapItem key={idx} idx={idx} slap={slap} queue={songIds} />))}
        </div>
      </div>
    )
  }
}

export default SlapsCarousel;