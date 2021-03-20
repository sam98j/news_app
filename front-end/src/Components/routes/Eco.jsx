import React from "react";
import NewsCard from "../templates/NewsCard";

function Eco({ news }) {
  const Data = news.filter(e => e.tag === "Economic");
  return (
    <div className="Eco">
      {Data.map(e => {
        return <NewsCard SingleNews={e} key={e.newsId} />;
      })}
    </div>
  );
}

export default Eco;
