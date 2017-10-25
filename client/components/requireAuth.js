import React, { Component } from "react";
import graphql from "react-apollo";
import currentUserQuery from "../queries/current_user";
import { hashHistory } from "react-router";

class RequireAuth extends Component {
  componentDidMount() {
    // if done loading the query, AND
    // if user does not exist yet (not logged in)
    if (!this.props.data.loading && !this.props.data.user) {
      hashHistory.push("/login");
    }
  }
}

graphql(currentUserQuery)(RequireAuth);
