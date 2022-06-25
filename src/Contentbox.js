const Contentbox = ({ poem, image, loading, error }) => {
  if (loading) {
    return <p>Loading!!!!</p>;
  }
  if (error) {
    return <p>Error happened</p>;
  }

  if (poem.poemtype === "poem") {
    return (
      <div className="poem-box">
        <div className="left-poem">
          <h2 className="con-name">{poem.name}</h2>
          <h3 className="con-author">by {poem.author}</h3>
          {poem.content.split("\n").map((item, i) => {
            return (
              <p className="con-poem">
                {item}
                <br></br>
              </p>
            );
          })}
        </div>
        <img src={image} alt="random landscape"></img>
      </div>
    );
  } else {
    return (
      <div className="story-box">
        <img src={image} alt="random landscape"></img>
        <h2 className="con-name">{poem.name}</h2>
        <h3 className="con-author">by {poem.author}</h3>
        {poem.content.split("\n").map((item, i) => {
          return (
            <p className="con-content">
              {item}
              <br></br>
            </p>
          );
        })}
      </div>
    );
  }
};

export default Contentbox;
