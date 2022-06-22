import { useState } from "react";
import "./App.css";
import Contentbox from "./Contentbox";
import Contribute from "./Contribute";
import Searchcard from "./Searchcard";
//const temp =
//  "Lorem ipsum dolor\n sit amet, consectetur adipiscing\n elit. Phasellus ultricies neque ante, \n vel bibendum irat odio.";
const rootVars = document.querySelector(":root");

const story =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac libero lectus. Donec a turpis ut felis finibus molestie non et metus. Ut fringilla aliquam ultricies. Sed eget sem tempus, vestibulum sapien vitae, luctus massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam viverra vestibulum quam, in scelerisque nisl faucibus eu. Curabitur interdum est quis nisl convallis, nec consectetur erat vulputate. Cras semper porta sem vitae gravida.Praesent tempus mollis gravida. Sed rhoncus, diam nec eleifend vehicula, arcu nisi lacinia sem, eget pretium dui arcu ut quam. Suspendisse id leo quis leo porttitor fringilla. Praesent suscipit neque sed sem rhoncus facilisis. Proin ornare tellus ante, sit amet varius nulla sollicitudin vel. Morbi sit amet lectus scelerisque, tempus est at, efficitur ante. Etiam et sapien sit amet orci porta maximus a vel ex. Sed lobortis risus eget lacus rhoncus scelerisque. Suspendisse ac tellus eget lacus consectetur varius. Fusce ut augue eget leo tincidunt fringilla.Donec lacus libero, tincidunt eu risus ac, mattis sodales erat. Nam dictum tortor vitae ipsum maximus, in laoreet nunc commodo. In aliquet mauris non augue tincidunt condimentum. Nunc vel interdum erat. Maecenas eget ex mauris. Nullam elementum maximus nibh, sed iaculis ligula consectetur a. Aenean varius purus eu malesuada tempor. Suspendisse potenti. Praesent quis pharetra metus. Ut elementum placerat massa non venenatis. Vestibulum consequat euismod turpis dignissim convallis. Donec nec lectus neque. Sed tristique pellentesque dui, a iaculis urna fermentum a. Donec augue nulla, vulputate ut orci quis, pharetra efficitur orci.Proin lacinia mi purus, in lacinia ex tincidunt vehicula. Fusce semper turpis nec nisl convallis fermentum. Maecenas ultricies metus ut luctus fermentum. Suspendisse sed imperdiet nisi, vitae porta justo. Curabitur maximus nulla lectus, in sollicitudin erat molestie eu. Nulla euismod tempor lorem eget pretium. Nulla massa justo, molestie eu porta quis, malesuada ac erat.Vivamus et diam leo. Aliquam mattis mauris risus, ac volutpat erat finibus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam turpis dui, euismod vel lectus sit amet, interdum hendrerit elit. Nam nec pellentesque ipsum. Pellentesque accumsan diam et laoreet ultricies. Nullam ut augue id orci euismod lacinia. Curabitur dignissim dolor quis dictum feugiat. Nulla libero ligula, fringilla ac felis quis, posuere suscipit orci. Aliquam ac velit mauris. Morbi cursus leo sit amet nisl suscipit, ut sollicitudin orci volutpat. Mauris hendrerit lacinia condimentum. Proin egestas dolor et ligula posuere interdum. ";
function App() {
  const [searchStat, setSearchStat] = useState(false);
  const [status, setStatus] = useState("content");
  const [lightMode, setLightMode] = useState(true);

  const toggleTheme = () => {
    if (lightMode) {
      rootVars.style.setProperty("--mode", "rgb(30, 30, 30)");
      rootVars.style.setProperty("--modeOpp", "white");
      rootVars.style.setProperty("--offsetMode", "rgb(48, 48, 48)");
      rootVars.style.setProperty("--offsetModeOpp", "rgb(216, 216, 216)");
      setLightMode(false);
    } else {
      rootVars.style.setProperty("--mode", "white");
      rootVars.style.setProperty("--modeOpp", "rgb(30, 30, 30)");
      rootVars.style.setProperty("--offsetMode", "rgb(216, 216, 216)");
      rootVars.style.setProperty("--offsetModeOpp", "rgb(48, 48, 48)");
      setLightMode(true);
    }
  };

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
          <h1
            id="main-logo"
            onClick={() => {
              setStatus("content");
            }}
          >
            POEMS
          </h1>
        </div>
        <div>
          <ul className="flex-list top-nav-right">
            <li id="nav-search-btn" className="nav-item" onClick={togglemenu}>
              Search
            </li>
            <li
              onClick={() => {
                setStatus("contribute");
              }}
              className="nav-item"
            >
              Contribute
            </li>
            <li onClick={toggleTheme} className="nav-item">
              {lightMode ? (
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              )}
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Name of poem/story"
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    name="author"
                    placeholder="Author/Poet"
                  ></input>
                </li>
                <li>
                  <select name="type">
                    <option value={"both"}>Both</option>
                    <option value={"poem"}>Poem</option>
                    <option value={"story"}>Story</option>
                  </select>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStatus("search");
                    }}
                    className="search-btn"
                  >
                    Search
                  </button>
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
      <div className="content-box">
        {status === "content" ? (
          <div>
            <Contentbox
              poemtype={false}
              name="Mountain's Fury"
              author="Bernard Russel"
              image={require("./main.PNG")}
              content={story}
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
        ) : status === "contribute" ? (
          <Contribute />
        ) : status === "search" ? (
          <div>
            <div className="flex-just-cent">
              <h1>Search Results</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </div>
            <div className="search-results">
              <Searchcard
                name="widow's wail"
                stories={true}
                poems={false}
                type="author"
                writings={["big days", "hello boys", "holas reposing"]}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
