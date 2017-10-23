import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/current_user";
import { Link } from "react-router";

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;
    // if still loading, shows nothing
    if (loading) {
      return <div />;
    }
    if (user) {
      // if user is not null (logged in)
      return <div>Logout</div>;
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

export default graphql(query)(Header);
