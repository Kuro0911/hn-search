import React from "react";
import "./App.css";
import News from "./News";
import Searchbox from "./Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>HACKER NEWS SEARCH</h1>
      <Searchbox />
      <Router>
        <Routes>
          <Route
            path="/news/:objId"
            element={
              <>
                <News fetchUrl={"12701272"} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
