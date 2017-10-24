import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./components/App";
import LoginForm from "./components/LoginForm";

// to tell apollo to send cookies in each request
const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin"
  }
});

const client = new ApolloClient({
  // with assumption that every type has an id,
  // and everytime we fetch data, we have to request the id as well
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
