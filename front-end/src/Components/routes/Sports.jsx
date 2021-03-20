import React from "react";
import NewsCard from "../templates/NewsCard";

function Sports({ news }) {
  const Data = news.filter(e => e.tag === "Sports");
  return (
    <div className="Sports">
      {Data.map(e => {
        return <NewsCard SingleNews={e} key={e.newsId} />;
      })}
    </div>
  );
}

export default Sports;
