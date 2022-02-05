import React from "react";
import "./App.css";
import News from "./News";
import Searchbox from "./Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>HACKER NEWS SEARCH</h1>
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
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
