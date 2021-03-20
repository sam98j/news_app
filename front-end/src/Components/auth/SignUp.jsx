import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    userName: "",
    userPassword: "",
    confirm_password: "",
    redirect: false
  };
  handleRedi = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const UserData = {
      name: this.state.name,
      password: this.state.password
    };
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(UserData)
    };
    fetch("http://localhost:8000/signup", config)
      .then(res => res.json())
      .then(res => {
        if (res.userAdded) {
          this.setState({ redirect: true });
        }
        console.log(res);
      });
  };
  render() {
    return (
      <div className="signup-form">
        {this.handleRedi()}
        <form
          action=""
          className="mr-auto ml-auto mt-5"
          style={{ width: "25%" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="User Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirm_password"
              className="form-control"
              placeholder="Confirm-Password"
              value={this.state.confirm_password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
