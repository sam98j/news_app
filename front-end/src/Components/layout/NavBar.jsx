import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  state = {
    auth: false
  };
  DeleteAllNews = () => {
    const reqConfi = {
      method: "DELETE"
    };
    fetch("http://localhost:8000/delete_all_news", reqConfi)
      .then(res => res.json())
      .then(res => {
        alert(`You Delete ${res.affectedRows} News`);
      });
    this.props.dispatch({ type: "delete_all_news" });
  };
  render() {
    const nav = this.state.auth ? (
      <ul className="navbar-nav ml-auto">
        {" "}
        <li className="nav-item">
          <NavLink className="nav-link" to="/eco">
            <FontAwesomeIcon icon="dollar-sign" /> economie
            <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/political">
            <FontAwesomeIcon icon="pen" /> political
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports">
            <FontAwesomeIcon icon="football-ball" /> sports
          </NavLink>
        </li>{" "}
      </ul>
    ) : (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2">
          <NavLink className="nav-link btn btn-primary" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link btn btn-primary" to="/signup">
            SignUp
          </NavLink>
        </li>{" "}
      </ul>
    );
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#ffc107" }}
      >
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <Link className="navbar-brand" to="/add">
          <FontAwesomeIcon icon="plus" />
        </Link>
        <button
          className="navbar-brand"
          onClick={this.DeleteAllNews}
          style={{ border: "none", background: "none" }}
        >
          <FontAwesomeIcon icon="trash" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {nav}
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);
