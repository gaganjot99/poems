function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Contentbox = ({
  data,
  loading,
  error,
  allPoemsByAuthor,
  randomContent,
}) => {
  if (loading) {
    return <p>Loading!!!!</p>;
  }
  if (error) {
    return <p>Error happened{error}</p>;
  }

  if (!data || !data.poem || !data.poem.type) {
    return <p>Loading!!!!</p>;
  }

  return (
    <div className="col-flex">
      {data.poem.type === "poem" ? (
        <div className="poem-box">
          <div className="left-poem">
            <h2 className="con-name">
              {capitalizeFirstLetter(data.poem.name)}
            </h2>
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
      ) : (
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
            randomContent(data.poem.type);
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
  );
};

export default Contentbox;
