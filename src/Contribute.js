import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_POEM = gql`
  mutation Addcontent($input: newContent!) {
    addcontent(input: $input) {
      name
      author
      type
    }
  }
`;

const Contribute = () => {
  const [type, setType] = useState("poem");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [addContent, { error, loading }] = useMutation(ADD_POEM);

  if (loading) {
    return <h1>Sending data</h1>;
  }

  if (error) {
    return <h1>Some error happened</h1>;
  }

  return (
    <div>
      <h1>Contribute</h1>
      <form className="cont-form">
        <div className="form-item">
          <label>Type</label>
          <select
            onChange={(e) => {
              setType(e.target.value.toLowerCase());
            }}
          >
            <option value="poem">Poem</option>
            <option value="story">Story</option>
          </select>
        </div>
        <div className="form-item">
          <label>Name</label>
          <input
            type="text"
            placeholder={type + " name"}
            onChange={(e) => {
              setName(e.target.value.toLowerCase());
            }}
          ></input>
        </div>
        <div className="form-item">
          <label>Author</label>
          <input
            type="text"
            placeholder={type + "'s author name"}
            onChange={(e) => {
              setAuthor(e.target.value.toLowerCase());
            }}
          ></input>
        </div>
        <div className="form-item">
          <label>{type}</label>
          <textarea
            placeholder="Write Something..."
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="search-btn"
          onClick={() => {
            addContent({
              variables: {
                input: {
                  name,
                  author,
                  type,
                  content,
                },
              },
            });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contribute;
