const Contribute = () => {
  return (
    <div>
      <h1>Contribute</h1>
      <form className="cont-form">
        <div className="form-item">
          <label>Type</label>
          <select>
            <option>Poem</option>
            <option>Story</option>
          </select>
        </div>
        <div className="form-item">
          <label>Author</label>
          <input type="text" placeholder="Author/Poet name"></input>
        </div>
        <div className="form-item">
          <label>Poem/Story</label>
          <textarea placeholder="Write Something..."></textarea>
        </div>
        <button className="search-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contribute;
