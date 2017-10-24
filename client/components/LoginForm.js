import React, { Component } from "react";
import AuthFrom from "./AuthForm";
import login from "../mutations/login";
import { graphql } from "react-apollo";
import query from "../queries/current_user";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors: errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthFrom
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(login)(LoginForm);
