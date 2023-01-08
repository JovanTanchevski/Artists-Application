import '../Styles/VisitorFilter.scss';
export const VisitorFilterForm = (props) => {
  return (
    <>
      <section className="visitor-filter-page ">
        <form className="filter-form">
          <i
            className="fas fa-times close-btn"
            onClick={props.closeHandler}
          ></i>
          <h2 className="filter-title">Filter By</h2>
          <div className="form-group">
            <label for="title">By Item Title</label>
            <input type="text" placeholder="Label" id="title" />
          </div>
          <div className="form-group">
            <label for="artist">By Artist</label>
            <select id="artist"></select>
          </div>
          <div className="form-group">
            <label for="price">By Price</label>
            <div className="price-box">
              <div className="min-val" id="price">
                <label for="min-val">Min:</label>
                <input
                  type="text"
                  id="min-val"
                  className="min-value"
                  placeholder="Label"
                />
              </div>
              <div className="max-val">
                <label for="max-val">Max:</label>
                <input
                  type="text"
                  id="max-val"
                  className="max-value"
                  placeholder="Label"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="type">By Type</label>
            <select name="type" className="typeSelect" id="type">
              <option value="/" selected disabled>
                Select User
              </option>
              {props.artists.map((artist) => (
                <option key={artist.name} value={artist.name}>
                  {artist.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submitBtn">
            <i className="fas fa-check check-btn"></i>
          </button>
        </form>
      </section>
    </>
  );
};
