import React, { useState, useEffect } from "react";
import axios from "./axios";
import LoadingSpinner from "./Loading";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./News.css";

function News() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const { objId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const request = await axios.get("items/" + objId);
      setNews(request.data);
      setComments(request.data.children);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [objId]);
  const goToo = () => {
    window.open(news.url);
  };
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="news-contaner">
      <div className="news-text">
        <h1>{news.title}</h1>
        <h4>{`--${news.author}`}</h4>
        <h2>{`Points: ${news.points}`}</h2>
        <text onClick={() => goToo()}>
          click here to read the full article{" "}
        </text>
        <h2>Comments</h2>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comments-cont">
            <Avatar
              src={`https://avatars.dicebear.com/api/avataaars/${comment.id}.svg`}
            ></Avatar>
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
