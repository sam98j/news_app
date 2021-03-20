import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class NewsCard extends React.Component {
  render() {
    const { SingleNews } = this.props;
    return (
      <div className="card mb-3" style={{ ...card }}>
        <div className="col-6 order-2 p-0" style={{ height: "284px" }}>
          <img
            src={SingleNews.path}
            alt="..."
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-body col-6">
          <h5 className="card-title">{SingleNews.title}</h5>
          <p className="card-text">
            {SingleNews.Content.substring(0, 200) + "..."}{" "}
            <span className="badge badge-success" style={{ cursor: "pointer" }}>
              <Link
                to={`/news/${SingleNews.newsId}`}
                style={{ color: "white" }}>
                Read More
              </Link>
            </span>
          </p>
          <p className="card-text">
            <small className="badge badge-warning">
              <FontAwesomeIcon icon="pen" /> {SingleNews.Author}
            </small>{" "}
            <small className="badge badge-warning">
              <FontAwesomeIcon icon="tag" /> {SingleNews.tag}
            </small>{" "}
            <small className="badge badge-warning">
              <FontAwesomeIcon icon="calendar" /> At {SingleNews.Date}
            </small>{" "}
            <small className="badge badge-warning">
              <FontAwesomeIcon icon="eye" /> {SingleNews.views}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export const card = {
  flexDirection: "row",
  width: "90%",
  margin: "auto"
};

export default connect()(NewsCard);
