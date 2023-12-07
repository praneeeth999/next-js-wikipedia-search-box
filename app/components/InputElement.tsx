"use client";
import React, { useState, useEffect } from "react";
import inputcss from "./input.module.css";
const InputElement = () => {
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://apis.ccbp.in/wiki-search?search=" + message)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setApiData(data.search_results);
      });
  }, [message]);

  return (
    <div>
      <input
        onChange={(event) => setMessage(event.target.value)}
        className={inputcss.input}
        type="search"
        placeholder="search here"
        name=""
        id=""
      />
      <div>
        {apiData.map((list, index) => (
          <div key={index}>
            <p className={inputcss.para}>{list.title}</p>
            <p className={inputcss.para}>{list.description}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default InputElement;

// onChange={event=>setMessage(event.target.value)
// onKeyDown={handlekeydown}
// onChange={handleChange}
