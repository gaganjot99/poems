const Searchcard = (props) => {
  return (
    <div
      className="search-card"
      onClick={() => {
        console.log(props.name);
        props.onClickHandle(props.type, props.name);
      }}
    >
      <h2>{props.name}</h2>
      {props.type !== "author" ? <h3>by {props.author}</h3> : null}
      {props.type === "author" ? (
        <ul className="writing-type-list">
          {props.poems === true ? (
            <li className="green">Poems</li>
          ) : (
            <li>Poems</li>
          )}
          {props.stories === true ? (
            <li className="green">Stories</li>
          ) : (
            <li>Stories</li>
          )}
        </ul>
      ) : null}
      {props.type === "poem" ? (
        <ul className="writing-type">
          <li>Poem</li>
        </ul>
      ) : props.type === "story" ? (
        <ul className="writing-type">
          <li>Story</li>
        </ul>
      ) : null}
      {props.type === "author" ? (
        <ul className="author-content-list">
          {props.writings.map((item) => {
            return <li>- {item}</li>;
          })}
        </ul>
      ) : (
        <div className="card-content">
          {props.content.split("\n").map((item, i) => {
            return (
              <p>
                {item}
                <br></br>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchcard;
