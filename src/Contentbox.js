function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Contentbox = ({ data, loading, error }) => {
  if (loading) {
    return <p>Loading!!!!</p>;
  }
  if (error) {
    return <p>Error happened{error}</p>;
  }

  if (!data.poem) {
    return <p>Loading!!!!</p>;
  }

  if (data.poem.type === "poem") {
    return (
      <div className="poem-box">
        <div className="left-poem">
          <h2 className="con-name">{capitalizeFirstLetter(data.poem.name)}</h2>
          <h3 className="con-author">
            by{" "}
            {data.poem.author
              .split(" ")
              .map((item) => capitalizeFirstLetter(item))
              .join(" ")}
          </h3>
          {data.poem.content.split("\n").map((item, i) => {
            return (
              <p className="con-poem" key={i}>
                {item}
                <br></br>
              </p>
            );
          })}
        </div>
        <picture>
          <source
            srcSet="https://picsum.photos/600/1000?random=1"
            media="(min-width: 500px)"
          ></source>
          <source
            srcSet="https://picsum.photos/400/400?random=1"
            media="(min-width: 200px)"
          ></source>
          <img
            src="https://picsum.photos/100/100?random=1"
            alt="Random landscape from free stock"
            width="300"
            height="200"
            loading="lazy"
            decoding="async"
          ></img>
        </picture>
      </div>
    );
  } else {
    return (
      <div className="story-box">
        <picture>
          <source
            srcSet="https://picsum.photos/600/1000?random=1"
            media="(min-width: 500px)"
          ></source>
          <source
            srcSet="https://picsum.photos/400/400?random=1"
            media="(min-width: 200px)"
          ></source>
          <img
            src="https://picsum.photos/100/100?random=1"
            alt="Random landscape from free stock"
            width="300"
            height="200"
            loading="lazy"
            decoding="async"
          ></img>
        </picture>
        <h2 className="con-name">{capitalizeFirstLetter(data.poem.name)}</h2>
        <h3 className="con-author">
          by{" "}
          {data.poem.author
            .split(" ")
            .map((item) => capitalizeFirstLetter(item))
            .join(" ")}
        </h3>
        {data.poem.content.split("\n").map((item, i) => {
          return (
            <p className="con-content" key={i}>
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
