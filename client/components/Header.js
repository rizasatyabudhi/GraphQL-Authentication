import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/current_user";
import { Link } from "react-router";
import gql from "graphql-tag";
import mutation from "../mutations/logout";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    // if still loading, shows nothing
    if (loading) {
      return <div />;
    }
    if (user) {
      // if user is not null (logged in)
      return (
        <li onClick={this.onLogoutClick.bind(this)}>
          <a>Logout</a>
        </li>
      );
    } else {
      return (
        // if user is null (logged out)
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left">Home</Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
