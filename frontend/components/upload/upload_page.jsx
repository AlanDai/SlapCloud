import React from "react";

// import UploadLandingPage from './uplading_landing_page';
// import SlapFormContainer from './slap_form_container';


class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slaps: []
    }
  }

  render () {
    const { slaps } = this.state;

    return <div>Upload page</div>


    // if(this.slaps.length === 0) {
    //   return <UploadLandingPage />
    // } else {
    //   return <SlapFormContainer />
    // }
  }
}

export default UploadPage;