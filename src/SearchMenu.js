import { useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";

const SearchMenu = (props) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [query, setQuery] = useState(gql`
    query Allauths {
      allauthors {
        name
        poems
        stories
        content
      }
    }
  `);

  const [
    searchPoems,
    { loading: searchLoad, error: searchErr, data: searchData },
  ] = useLazyQuery(query);

  const allAuthors = () => {
    setQuery(gql`
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
  };

  if (searchLoad) {
    return <p>Loading</p>;
  }
  console.log(searchData);
  return (
    <div id="search-dropdown">
      <ul className="flex-list all-search-btns">
        <li>Browse:-</li>
        <li>
          <button onClick={allAuthors}>All Authors</button>
        </li>
        <li>
          <button>All Poems</button>
        </li>
        <li>
          <button>All Stories</button>
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
          <select name="type">
            <option value={"both"}>Both</option>
            <option value={"poem"}>Poem</option>
            <option value={"story"}>Story</option>
          </select>
        </li>
        <li>
          <button
            onClick={() => {
              props.setStatus("search");
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
