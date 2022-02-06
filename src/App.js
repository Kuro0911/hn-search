import React from "react";
import "./App.css";
import News from "./News";
import Searchbox from "./Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const goToo = () => {
    window.open("https://github.com/Kuro0911/hn-search");
  };
  return (
    <div className="App">
      <div className="App-cont">
        <Router>
          <Routes>
            <Route
              path="/news/:objId"
              element={
                <>
                  <Searchbox isResult />
                  <News />
                </>
              }
            />
            <Route
              path="/news"
              element={
                <>
                  <Searchbox />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Searchbox />
                  <text onClick={() => goToo()}>go to docs</text>
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
