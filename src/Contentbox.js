const Contentbox = (props) => {
  if (props.poemtype) {
    return (
      <div className="poem-box">
        <div className="left-poem">
          <h2 className="con-name">{props.name}</h2>
          <h3 className="con-author">by {props.author}</h3>
          {props.content.split("\n").map((item, i) => {
            return (
              <p className="con-poem">
                {item}
                <br></br>
              </p>
            );
          })}
        </div>
        <img src={props.image} alt="random landscape"></img>
      </div>
    );
  } else {
    return (
      <div className="story-box">
        <img src={props.image} alt="random landscape"></img>
        <h2 className="con-name">{props.name}</h2>
        <h3 className="con-author">by {props.author}</h3>
        {props.content.split("\n").map((item, i) => {
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
