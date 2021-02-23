import React from "react";
import ReactLoading from 'react-loading';

const LoadingPage = (props) => {

  return (
    <div id="loading-page">
      <span>Loading</span>
      <ReactLoading
        type={"spin"}
        color={"#FF4500"}
        width={100}
        height={100}
      />
    </div>
  )
}

export default LoadingPage;