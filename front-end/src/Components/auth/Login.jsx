import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    user: {
      userName: "",
      userPassword: ""
    },
    login: false
  };
  updateState = e => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };
  submitForm = e => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    };
    fetch("http://localhost:8000/signin", config)
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          this.setState({
            ...this.state,
            login: true
          });
        }
        console.log(data);
      });
  };
  render() {
    return (
      <div className="login-form">
        {this.state.login ? <Redirect path="/" /> : ""}
        <form
          action=""
          className="mr-auto ml-auto mt-5"
          style={{ width: "25%" }}
          onSubmit={this.submitForm}
        >
          <div className="form-group">
            <input
              type="text"
              name="userName"
              className="form-control"
              placeholder="User Name"
              onChange={this.updateState}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="userPassword"
              className="form-control"
              placeholder="Password"
              onChange={this.updateState}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
