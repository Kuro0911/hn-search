import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./Loading";
import axios from "./axios";
import "./Searchbox.css";
function Searchbox({ isResult }) {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [foundNews, setFoundNews] = useState([]);
  const showSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    async function fetchData() {
      const request = await axios.get(
        "search?query=" + input + "&hitsPerPage=50"
      );
      setFoundNews(request.data.hits);
      setIsLoading(false);
      return request;
    }
    fetchData();
    setInput("");
  };
  if (!isResult) {
    return (
      <div className="search-box">
        <Link to={"/news"} className="head">
          <h1>HACKER NEWS SEARCH</h1>
        </Link>
        <div className="search">
          <div className="search-cont">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="search..."
                type="text"
              />
              <button onClick={showSearch} disabled={isLoading} type="submit">
                send
              </button>
            </form>
          </div>
        </div>
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {foundNews.map((news) => {
                return (
                  <div className="search-res">
                    <h1>
                      <Link to={`/news/${news.objectID}`}>{news.title}</Link>
                    </h1>
                    <div className="search-info">
                      <text>
                        {"Points ~  "} {news.points}{" "}
                      </text>
                      <h2>{`~${news.author}`}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="back-text">
        <div>
          <Link to={"/news"}>
            <div className="back-text">Back to search results</div>
          </Link>
          <div className="off"></div>
        </div>
      </div>
    );
  }
}

export default Searchbox;
