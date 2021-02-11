import React from 'react';

import SquareSlapItem from './square_slap_item';

class SlapsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { slaps, header, subheader } = this.props;

    return (
      <div className="slap-carousel">
        <div className="slap-carousel-content">
          <div className="carousel-spacer">spacer</div>
          {slaps && Object.keys(slaps).map((id) => (<SquareSlapItem key={id} slap={slaps[id]} />))}
        </div>
      </div>
    )
  }
}

export default SlapsCarousel;