import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./News.css";

function News({ fetchUrl }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setNews(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(news);
  return (
    <div className="news-contaner">
      <h1>{news.title}</h1>
    </div>
  );
}

export default News;
