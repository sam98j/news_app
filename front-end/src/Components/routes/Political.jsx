import React from "react";
import NewsCard from "../templates/NewsCard";

function Political({ news }) {
  console.log(news)
  const Data = news.filter(e => e.tag === "Political");
  return (
    <div className="Political">
      {Data.map(e => {
        return <NewsCard SingleNews={e} key={e.newsId} />;
      })}
    </div>
  );
}

export default Political;
