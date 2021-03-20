import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setViews } from "../../ActionCreators";

function send(dbviews, lsviews, id) {
  const data = {
    views: dbviews + lsviews
  };
  const conifg = {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch(`http://localhost:8000/updateViews/${id}`, conifg);
}

function FullNews(props) {
  const { id } = useParams();
  const data =
    props.news[0] === true
      ? props.news
      : props.news.filter(e => e.newsId === Number(id));
  useEffect(() => {
    if (data[0] !== true) {
      localStorage.setItem("views", JSON.stringify(props.views + 1));
      props.setViews();
    }
  }, []);
  useEffect(() => {
    if (props.views > 0) {
      send(data[0].views, props.views, id);
    }
  }, [props.views]);
  const renderingEle = (
    <div className="full-news">
      <div className="card">
        <div className="card-top-img">
          <img src={data[0].path} alt="" style={{ width: "100%" }} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{data[0].title}</h2>
          <h6 className="card-subtitle text-muted">
            <span className="mr-2">
              <FontAwesomeIcon icon="pen" /> {data[0].Author}
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon="calendar" /> {data[0].Date}
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon="eye" /> {data[0].views}
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon="tag" /> {data[0].tag}
            </span>{" "}
          </h6>
          <p className="card-text mt-5">{data[0].Content}</p>
        </div>
      </div>
    </div>
  );
  return <div>{data[0] === true ? <div>loading</div> : renderingEle}</div>;
}

const mapDispatch = dispatch => {
  return {
    setViews: () => dispatch(setViews())
  };
};

const mapState = state => {
  return {
    news: state.news,
    views: state.views
  };
};

export default connect(mapState, mapDispatch)(FullNews);
