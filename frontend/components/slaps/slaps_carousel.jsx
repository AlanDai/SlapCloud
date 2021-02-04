import React from 'react';
import ItemsCarousel from 'react-items-carousel';

import SquareSlapItem from './square_slap_item';

class SlapsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0
    }
  }

  render () {
    const { slaps } = this.props;

    const children = Object.keys(slaps).map((id) => (
      <SquareSlapItem style={{ height: "200 px", width: "177px" }} key={id} slap={slaps[id]} />
    ))

    console.log(children);

    return (
      <div className="slap-carousel">
        <ItemsCarousel
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value => this.setState({ activeItemIndex: value })}
          numberOfCards={4}
          gutter={0}
          slidesToScroll={4}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          chevronWidth={40}
          outsideChevron
          children={children}
        />
      </div>
    )
  }
}

export default SlapsCarousel;