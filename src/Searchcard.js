function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styleGen = (i) => {
  return { background: `var(--color${i % 10})` };
};

const Searchcard = (props) => {
  return (
    <div
      className="search-card"
      style={{ "--i": props.index }}
      onClick={() => {
        props.onClickHand(props.type, props.name);
      }}
    >
      {props.type !== "author" ? (
        <div>
          <h2>{capitalizeFirstLetter(props.name)}</h2>
          <h3>
            by{" "}
            {props.author
              .split(" ")
              .map((item) => capitalizeFirstLetter(item))
              .join(" ")}
          </h3>
        </div>
      ) : null}
      {props.type === "author" ? (
        <div>
          <h2>
            {props.name
              .split(" ")
              .map((item) => capitalizeFirstLetter(item))
              .join(" ")}
          </h2>
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
        </div>
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
          {props.content
            .substring(0, 100)
            .split("\n")
            .map((item, i) => {
              if (i > 3) {
                return null;
              }
              return (
                <p>
                  {item}
                  <br></br>
                </p>
              );
            })}
        </div>
      )}
      <div className="search-lower"></div>
      <div className="color-div" style={styleGen(props.index)}></div>
    </div>
  );
};

export default Searchcard;
