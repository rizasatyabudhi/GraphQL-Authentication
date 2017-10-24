import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit(e) {
    e.preventDefault();
    // this.props.onSubmit comes from <AuthFrom onSubmit={this.onSubmit.bind(this)} />

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="errors">
            {this.props.errors &&
              this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
