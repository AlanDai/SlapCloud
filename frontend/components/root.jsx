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
  faVolumeDown,
  faVolumeMute,
  faPlayCircle,
  faPauseCircle,
  faHeart,
  faUser,
  faCommentAlt,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
  faRedo,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faPlayCircle,
  faPauseCircle,
  faHeart,
  faUser,
  faCommentAlt,
  faEdit,
  faTrash,
)

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
