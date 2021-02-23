import React from "react";

import LoadingPage from "./../loading/loading_page";
import SlapsCarousel from "./slaps_carousel";
import SlapItemContainer from "./slap_item_container";

class SlapsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.props.fetchSlaps().then(res => this.setState({ loading: false }));
    this.props.emailUncheck();
  }

  render() {
    if (this.state.loading) return <LoadingPage />

    const { slaps } = this.props;

    return(
      <div className="slap-index" >
        { Object.keys(slaps).length &&
          <div className="slap-index-section">
            <div className="carousel-header">Featured Song</div>
            <div className="carousel-subheader">Check out the latest slap, fresh off the press!</div>
            <SlapItemContainer slap={slaps[Object.keys(slaps)[Object.keys(slaps).length - 1]]}/>
          </div>
        }
        <div className="slap-index-section">
          <div className="carousel-header">More of what you like</div>
          <div className="carousel-subheader">Suggestions based on what you've liked or played</div>
          <SlapsCarousel slaps={Object.values(slaps).slice(0, 10)} />
        </div>
        <div className="slap-index-section">
          <div className="carousel-header">Discover new music</div>
          <div className="carousel-subheader">A compilation of our picks of the week</div>
          <SlapsCarousel slaps={Object.values(slaps).reverse().slice(0, 10)} />
        </div>
      </div>
    )
  }
}

export default SlapsIndex;