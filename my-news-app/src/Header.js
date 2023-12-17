import React, { useState, useEffect } from "react";

export default function Header({
  onSelectedTopicChange,
  onSelectedQuestionChange,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTopic, setSearchTopic] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 
    return () => clearInterval(timer); 
  }, []);

  const handleInputChange = (event) => {
    setSearchTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSelectedQuestionChange(`&q=${searchTopic}`);
  };

  return (
    <div id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <li class="nav-item active">
          <button id="dateAndTime" disabled>
            {currentDate.toLocaleString()}
          </button>
        </li>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <button
                onClick={() => onSelectedTopicChange("&category=general")}
              >
                General
              </button>
            </li>
            <li class="nav-item">
              <button
                onClick={() => onSelectedTopicChange("&category=business")}
              >
                Business
              </button>
            </li>
            <li class="nav-item">
              <button
                onClick={() => onSelectedTopicChange("&category=science")}
              >
                Science
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => onSelectedTopicChange("&category=health")}>
                Health
              </button>
            </li>
            <li class="nav-item">
              <button
                onClick={() => onSelectedTopicChange("&category=technology")}
              >
                Technology
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => onSelectedTopicChange("&category=sports")}>
                Sports
              </button>
            </li>
            <li class="nav-item">
              <button
                onClick={() => onSelectedTopicChange("&category=entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>
          <form
            class="form-inline my-2 my-lg-0"
            id="searchForm"
            onSubmit={handleSubmit}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
