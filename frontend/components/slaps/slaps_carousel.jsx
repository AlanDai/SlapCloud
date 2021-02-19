import React from 'react';

import SquareSlapItem from './square_slap_item';

class SlapsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { slaps } = this.props;

    return (
      <div className="slap-carousel">
        <div className="slap-carousel-content">
          {slaps && slaps.map((slap, idx) => (<SquareSlapItem key={idx} slap={slap} />))}
        </div>
      </div>
    )
  }
}

export default SlapsCarousel;