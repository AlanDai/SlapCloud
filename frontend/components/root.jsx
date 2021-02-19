import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

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
  faCamera,
  faUserPlus,
  faUserCheck,
  faSearch,
  faHandPaper,
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
  faCamera,
  faUserPlus,
  faUserCheck,
  faSearch,
  faHandPaper,
)

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
