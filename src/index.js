/* eslint react/jsx-filename-extension:0 */
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Root from "Common/components/Root";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
