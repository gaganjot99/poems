const Contentbox = ({ data, image, loading, error }) => {
  if (loading) {
    return <p>Loading!!!!</p>;
  }
  if (error) {
    return <p>Error happened{error}</p>;
  }

  if (data.poem.type === "poem") {
    return (
      <div className="poem-box">
        <div className="left-poem">
          <h2 className="con-name">{data.poem.name}</h2>
          <h3 className="con-author">by {data.poem.author}</h3>
          {data.poem.content.split("\n").map((item, i) => {
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
        <h2 className="con-name">{data.poem.name}</h2>
        <h3 className="con-author">by {data.poem.author}</h3>
        {data.poem.content.split("\n").map((item, i) => {
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
