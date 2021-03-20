import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ImportantNews extends Component {
  render() {
    const { SingleNews } = this.props;
    return (
      <div className="card mb-3" style={{ flexDirection: "row" }}>
        <div className="col-6 order-2 p-0">
          <img
            src={SingleNews.path}
            alt="..."
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-body col-6">
          <h5 className="card-title">{SingleNews.title}</h5>
          <p className="card-text">
            <small className="badge badge-success">
              <FontAwesomeIcon icon="calendar" /> {SingleNews.Date}
            </small>
            <small className="badge badge-success">
              <FontAwesomeIcon icon="eye" /> {SingleNews.views}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default ImportantNews;
