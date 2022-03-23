import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { client } from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";
import "@elastic/eui/dist/eui_theme_light.css";

import { EuiProvider } from "@elastic/eui";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <EuiProvider colorMode="light">
        <App />
      </EuiProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
