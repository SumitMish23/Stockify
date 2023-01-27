import React from "react";
import { useState, useEffect } from "react";
import Stocktable from "../Stocktable/Stocktable";
import "./Searchbar.css";

const Searchbar = () => {
  const [input, setInput] = useState("");

  //   Stocks-Data
  const [data, setData] = useState([]);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Your Stocks..."
          onChange={(event) => handleInputChange(event)}
        />
        <button>Get Started</button>
      </div>
      <Stocktable data={data} input={input} setData={setData} />
    </>
  );
};

export default Searchbar;
