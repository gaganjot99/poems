import { gql } from "@apollo/client";
import Searchcard from "./Searchcard";

const Search = ({
  data,
  refetch,
  setStatus,
  setQuery,
  searchPoems,
  loading,
  error,
}) => {
  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Some search error happened</p>;
  }

  const onClickCard = (type, name) => {
    if (type === "author") {
      setQuery(gql`
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
          poeminput: {
            name: "",
            author: name,
            type: "",
          },
        },
      });
    } else {
      refetch({
        poemname: name,
      });
      setStatus("content");
    }
  };

  console.log(data.allauthors);
  var type = "author";
  if (data.allauthors) {
    type = "author";
  } else {
    type = "poem";
  }
  return (
    <div>
      <div className="flex-just-cent">
        <h1>Search Results</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </div>
      <div className="search-results">
        {type === "author"
          ? data.allauthors.map((item, i) => {
              return (
                <Searchcard
                  name={item.name}
                  stories={item.stories}
                  poems={item.poems}
                  type="author"
                  writings={item.content}
                  onClickHandle={onClickCard}
                  id={i}
                />
              );
            })
          : data.allpoems.map((item, i) => {
              return (
                <Searchcard
                  name={item.name}
                  author={item.author}
                  type={item.type}
                  content={item.content}
                  onClickHandle={onClickCard}
                  id={i}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Search;
