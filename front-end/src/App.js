import React from "react";
import { connect } from "react-redux";
import "./css/index.css";
import Home from "./Components/routes/Home";
import NavBar from "./Components/layout/NavBar";
import AddNews from "./Components/AddNews";
import Eco from "./Components/routes/Eco";
import Political from "./Components/routes/Political";
import Sports from "./Components/routes/Sports";
import FullNews from "./Components/templates/FullNews";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import { getData } from "./ActionCreators";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Protected from "./Components/routes/Protected";

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("add");
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route
              exact
              path="/"
              component={() => <Home news={this.props.news} />}
            />
            <Route path="/add" component={() => <AddNews />} />
            <Route
              path="/eco"
              component={() => <Eco news={this.props.news} />}
            />
            <Route
              path="/political"
              component={() => <Political news={this.props.news} />}
            />
            <Route
              path="/sports"
              component={() => <Sports news={this.props.news} />}
            />
            <Route path="/news/:id" component={() => <FullNews />} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/signup" component={() => <SignUp />} />
            <Route path="/protected" component={() => <Protected />} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

const mapState = state => {
  return {
    news: state.news
  };
};

export default connect(mapState, mapDispatch)(App);
