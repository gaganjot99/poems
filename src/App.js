import { useEffect, useState } from "react";
import "./App.css";
import Contentbox from "./Contentbox";
import Contribute from "./Contribute";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import Search from "./search";
import SearchMenu from "./SearchMenu";

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
  const [status, setStatus] = useState("content");
  const [lightMode, setLightMode] = useState(true);
  const [ContentType, setContentType] = useState("random");
  const [query1, setQuery1] = useState(ALL_AUTH);
  const [query, setQuery] = useState(ONE_POEM);
  const [randomQuery, setRandomQuery] = useState(RANDOM_POEM);

  const [
    getRandomPoem,
    { loading: randomLoad, error: randomErr, data: randomData },
  ] = useLazyQuery(randomQuery, { fetchPolicy: "network-only" });

  const { error, loading, data, refetch } = useQuery(query, {
    variables: {
      poemname: "horse shoe",
    },
  });

  const [
    searchPoems,
    { loading: searchLoad, error: searchErr, data: searchData },
  ] = useLazyQuery(query1);

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
    setQuery1(ALL_POEMS);
    searchPoems({
      variables: {
        poeminput: {
          name: "",
          author: author,
          type: "",
        },
      },
    });
    setStatus("search");
  };

  const randomContent = (type) => {
    if (type === "poem") {
      setRandomQuery(RANDOM_POEM);
      setContentType("random");
      getRandomPoem();
    } else {
      setRandomQuery(RANDOM_STORY);
      setContentType("random");
      getRandomPoem();
    }
  };

  const namedContent = (name) => {
    refetch({
      poemname: name,
    });
    setContentType("named");
    setStatus("content");
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
              setStatus={setStatus}
              searchPoems={searchPoems}
              setQuery1={setQuery1}
            />
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
          <div className="col-flex">
            {!randomData ? (
              <h1>Loading</h1>
            ) : ContentType === "random" ? (
              <Contentbox
                loading={randomLoad}
                error={randomErr}
                data={randomData}
              />
            ) : (
              <Contentbox loading={loading} error={error} data={data} />
            )}
            <div className="bot-nav">
              <button
                className="bot-nav-item"
                onClick={() => {
                  allPoemsByAuthor(data.poem.author);
                }}
              >
                More by Same Author
              </button>
              <p
                className="bot-nav-item"
                onClick={() => {
                  if (ContentType === "named") {
                    randomContent(data.poem.type);
                  } else {
                    randomContent(randomData.poem.type);
                  }
                }}
              >
                Another one
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </p>
            </div>
          </div>
        ) : status === "contribute" ? (
          <Contribute />
        ) : status === "search" ? (
          <Search
            data={searchData}
            refetch={refetch}
            loading={searchLoad}
            error={searchErr}
            setStatus={setStatus}
            setQuery1={setQuery1}
            searchPoems={searchPoems}
            setQuery={setQuery}
            setContent={namedContent}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
