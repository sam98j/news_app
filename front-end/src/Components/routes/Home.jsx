import React, { Component } from "react";
import NewsCard from "../templates/NewsCard";
import ImportantNews from "../templates/ImportantNews";

class Home extends Component {
  render() {
    const Data = this.props.news[0] === true;
    const loading = <div>loading</div>;
    const element = <div className="Home row pt-5">
    <div
      className="most-important-news col-8">
      {this.props.news.map(SingleNews => {
        return <NewsCard SingleNews={SingleNews} key={SingleNews.newsId} />;
      })}
    </div>
    <div className="latest-news col-4 p-0">
      {this.props.news.map(SingleNews => {
        return (
          <ImportantNews SingleNews={SingleNews} key={SingleNews.newsId} />
        );
      })}
    </div>
  </div>;
  const rElement = Data ? loading : element;
    return rElement;
  }
}

export default Home;
