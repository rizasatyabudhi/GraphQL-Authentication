import React, { Component } from "react";
import graphql from "react-apollo";
import currentUserQuery from "../queries/current_user";
import { hashHistory } from "react-router";

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      // if done loading the query, AND
      // if user does not exist yet (not logged in)
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
