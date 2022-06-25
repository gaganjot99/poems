import { useState } from "react";
import { gql } from "@apollo/client";

const SearchMenu = ({ setSearchStat, setStatus, setQuery1, searchPoems }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");

  const allAuthors = () => {
    setQuery1(gql`
      query Allauths {
        allauthors {
          name
          poems
          stories
          content
        }
      }
    `);

    searchPoems();
    setSearchStat(false);
    setStatus("search");
  };

  const allPoems = (poemname = "", poemauthor = "", poemtype = "") => {
    console.log("here I run");
    setQuery1(gql`
      query Allpoems($poeminput: poemInput) {
        allpoems(input: $poeminput) {
          name
          author
          type
          content
        }
      }
    `);

    searchPoems({
      variables: {
        poeminput: { name: poemname, author: poemauthor, type: poemtype },
      },
    });
    setSearchStat(false);
    setStatus("search");
  };

  return (
    <div id="search-dropdown">
      <ul className="flex-list all-search-btns">
        <li>Browse:-</li>
        <li>
          <button onClick={allAuthors}>All Authors</button>
        </li>
        <li>
          <button
            onClick={() => {
              allPoems("", "", "poem");
            }}
          >
            All Poems
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              allPoems("", "", "story");
            }}
          >
            All Stories
          </button>
        </li>
      </ul>
      <ul className="flex-list search-form">
        <li>
          <input
            type="text"
            name="name"
            placeholder="Name of poem/story"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </li>
        <li>
          <input
            type="text"
            name="author"
            placeholder="Author/Poet"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          ></input>
        </li>
        <li>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            name="type"
          >
            <option value={""}>Both</option>
            <option value={"poem"}>Poem</option>
            <option value={"story"}>Story</option>
          </select>
        </li>
        <li>
          <button
            onClick={() => {
              allPoems(name, author, type);
            }}
            className="search-btn"
          >
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SearchMenu;
