import React, { Component } from "react";
import AuthForm from "./AuthForm";
import signup from "../mutations/signup";
import { graphql } from "react-apollo";
import query from "../queries/current_user";
import { hashHistory } from "react-router";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    // this.props.data = the old, current set of props
    // nextProps = the next set of props that will be in place
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
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
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(signup)(SignupForm));
