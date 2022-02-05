import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useParams } from "react-router-dom";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const { objId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("items/" + objId);
      setNews(request.data);
      setComments(request.data.children);
      return request;
    }
    fetchData();
  }, [objId]);
  return (
    <div className="news-contaner">
      <h1>{news.title}</h1>
      <h2>{news.points}</h2>
      {comments.map((comment) => {
        return (
          <div className="comments-cont">
            <div className="comment-name">{comment.author}</div>
            <div
              className="comment-txt"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default News;
