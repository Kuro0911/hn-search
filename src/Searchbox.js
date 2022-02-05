import React from "react";
import "./Searchbox.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

function Searchbox() {
  return (
    <div>
      <div className="search">
        <div className="search-cont">
          <SearchOutlined />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
