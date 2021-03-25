import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// React router
import { BrowserRouter } from "react-router-dom";
// Redux provider
import { Provider } from "react-redux";
// Redux store
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
