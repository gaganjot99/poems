import { useState } from "react";
import "./App.css";
import Contentbox from "./Contentbox";
const temp =
  "Lorem ipsum dolor\n sit amet, consectetur adipiscing\n elit. Phasellus ultricies neque ante, \n vel bibendum irat odio.";
function App() {
  const [searchStat, setSearchStat] = useState(false);
  const togglemenu = () => {
    if (searchStat) {
      setSearchStat(false);
      document.getElementById("nav-search-btn").style.textDecoration = "none";
    } else {
      setSearchStat(true);
      document.getElementById("nav-search-btn").style.textDecoration =
        "underline";
    }
  };
  return (
    <div id="app">
      <header className="top-nav">
        <div>
          <h1 id="main-logo">POEMS</h1>
        </div>
        <div>
          <ul className="flex-list top-nav-right">
            <li id="nav-search-btn" className="nav-item" onClick={togglemenu}>
              Search
            </li>
            <li className="nav-item">Contribute</li>
            <li className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-moon-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
            </li>
          </ul>
          {searchStat ? (
            <div id="search-dropdown">
              <ul className="flex-list all-search-btns">
                <li>Browse:-</li>
                <li>
                  <button>All Authors</button>
                </li>
                <li>
                  <button>All Poems</button>
                </li>
                <li>
                  <button>All Stories</button>
                </li>
              </ul>
              <ul className="flex-list">
                <li>
                  <input name="name" placeholder="Name of poem/story"></input>
                </li>
                <li>
                  <input name="author" placeholder="Author/Poet"></input>
                </li>
                <li>
                  <select name="type">
                    <option value={"both"}>Both</option>
                    <option value={"poem"}>Poem</option>
                    <option value={"story"}>Story</option>
                  </select>
                </li>
                <li>
                  <button className="search-btn">Search</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </header>
      <div>
        <p id="con-day-header">
          <span>Poem</span>/<span>Story</span> of the day
        </p>
      </div>
      <div>
        <Contentbox
          poemtype={true}
          name="Mountain's Fury"
          author="Bernard Russel"
          image={require("./main.PNG")}
          content={temp}
        />
        <div className="bot-nav">
          <button>More by Same Author</button>
          <p>
            Another one
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
