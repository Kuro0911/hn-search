import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import "./Searchbox.css";
function Searchbox({ isResult }) {
  const [input, setInput] = useState("");
  const [foundNews, setFoundNews] = useState([]);
  const showSearch = (e) => {
    e.preventDefault();
    async function fetchData() {
      const request = await axios.get(
        "search?query=" + input + "&hitsPerPage=50"
      );
      setFoundNews(request.data.hits);
      return request;
    }
    fetchData();
    setInput("");
  };
  if (!isResult) {
    return (
      <div className="search-box">
        <h1>HACKER NEWS SEARCH</h1>
        <div className="search">
          <div className="search-cont">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="search..."
                type="text"
              />
              <button onClick={showSearch} type="submit">
                send
              </button>
            </form>
          </div>
        </div>
        {foundNews.map((news) => {
          return (
            <div className="search-res">
              <div className="res-container">
                <h1>
                  <Link to={`/news/${news.objectID}`}>
                    {news.title}
                    {" points::"} {news.points}
                  </Link>
                </h1>
                <h2>{news.author}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Link to={"/news"}>
            <h1>go back</h1>
          </Link>
          <div className="off"></div>;
        </div>
      </div>
    );
  }
}

export default Searchbox;
