import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppContainer } from "react-hot-loader";
import { ErrorBoundary } from "./components/error-boundary/error-boundary";
import { API_SETTINGS } from "./utils/api/settings";
import { SENTRY_SETTINGS } from "./utils/logging/sentry";
import Layout from "./layout/layout";
import "./../styles/main.scss";
import Raven from "raven-js";

declare var module: { hot: any };
declare var process: {
  env: {
    NODE_ENV: string;
  };
};

const client: ApolloClient<any> = new ApolloClient({
  uri: API_SETTINGS.API_URL + "/graphql"
});

//Sentry error logging
Raven.config(SENTRY_SETTINGS.SENTRY_URL).install();

const App: any = Component => {
  ReactDOM.render(
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <AppContainer>
          <Layout />
        </AppContainer>
      </ApolloProvider>
    </ErrorBoundary>,
    document.getElementById("app-container")
  );
};

App(Layout);

//If HRM is enabled replace Layout container - only dev mode
if (module.hot && process.env.NODE_ENV === "local") {
  module.hot.accept("./layout/layout", () => {
    App("./layout/layout");
  });
}
