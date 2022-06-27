import { useEffect, useState } from "react";
import "./App.css";
import Contentbox from "./Contentbox";
import Contribute from "./Contribute";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import Search from "./search";
import SearchMenu from "./SearchMenu";
import { Routes, Route, useNavigate } from "react-router-dom";

const rootVars = document.querySelector(":root");

const ONE_POEM = gql`
  query poemo($poemname: String!) {
    poem(input: $poemname) {
      name
      type
      author
      content
    }
  }
`;

const ALL_POEMS = gql`
  query Allpoems($poeminput: poemInput) {
    allpoems(input: $poeminput) {
      name
      author
      type
      content
    }
  }
`;

const RANDOM_POEM = gql`
  query randomP {
    poem: randompoem {
      name
      author
      type
      content
    }
  }
`;
const RANDOM_STORY = gql`
  query randomS {
    poem: randomstory {
      name
      author
      type
      content
    }
  }
`;

const ALL_AUTH = gql`
  query Allauths {
    allauthors {
      name
      poems
      stories
      content
    }
  }
`;

function App() {
  const [searchStat, setSearchStat] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  const [query, setQuery] = useState(ALL_AUTH);
  const [randomQuery, setRandomQuery] = useState(RANDOM_POEM);
  const navigate = useNavigate();

  const [
    getRandomPoem,
    { loading: randomLoad, error: randomErr, data: randomData },
  ] = useLazyQuery(randomQuery, { fetchPolicy: "network-only" });

  const { error, loading, data, refetch } = useQuery(ONE_POEM, {
    variables: {
      poemname: "horse shoe",
    },
  });

  const [
    searchPoems,
    { loading: searchLoad, error: searchErr, data: searchData },
  ] = useLazyQuery(query);

  useEffect(() => {
    randomContent("poem");
  }, []);

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

  const allPoemsByAuthor = (author) => {
    setQuery(ALL_POEMS);
    searchPoems({
      variables: {
        poeminput: {
          name: "",
          author: author,
          type: "",
        },
      },
    });
    navigate("/search");
  };

  const randomContent = (type) => {
    if (type === "poem") {
      setRandomQuery(RANDOM_POEM);
      navigate("/");
      getRandomPoem();
    } else {
      setRandomQuery(RANDOM_STORY);
      navigate("/");
      getRandomPoem();
    }
  };

  const namedContent = (name) => {
    refetch({
      poemname: name,
    });
    navigate("/poem");
  };

  return (
    <div id="app">
      <header className="top-nav">
        <div>
          <h1
            id="main-logo"
            onClick={() => {
              navigate("/");
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
                navigate("/contribute");
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
                  className="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              )}
            </li>
          </ul>
          {searchStat ? (
            <SearchMenu
              setSearchStat={setSearchStat}
              searchPoems={searchPoems}
              setQuery={setQuery}
              navigate={navigate}
            />
          ) : null}
        </div>
      </header>
      <div className="content-box">
        <Routes>
          <Route
            path="/"
            element={
              <Contentbox
                loading={randomLoad}
                error={randomErr}
                data={randomData}
                allPoemsByAuthor={allPoemsByAuthor}
                randomContent={randomContent}
              />
            }
          ></Route>

          <Route
            path="/poem"
            element={
              <Contentbox
                loading={loading}
                error={error}
                data={data}
                allPoemsByAuthor={allPoemsByAuthor}
                randomContent={randomContent}
              />
            }
          ></Route>

          <Route
            path="/search"
            element={
              <Search
                data={searchData}
                loading={searchLoad}
                error={searchErr}
                setQuery={setQuery}
                searchPoems={searchPoems}
                setContent={namedContent}
              />
            }
          ></Route>

          <Route path="/contribute" element={<Contribute />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
