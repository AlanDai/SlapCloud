import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import configureStore from "./store/store";

import Root from "./components/root";

const TRACKING_ID = "G-YWD05BBW47";
function initializeReactGA() {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('/');
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      ui: {
        modals: { userModal: false }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  initializeReactGA();

  ReactDOM.render(<Root store={store} />, root);
});

