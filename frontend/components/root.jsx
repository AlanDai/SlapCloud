import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./app";

// react-fontawesome icon importing process
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
  faRedo,
  faVolumeUp,
  faVolumeMute,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
  faRedo,
  faVolumeUp,
  faVolumeMute,
  faPlayCircle,
  faPauseCircle,
)

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
