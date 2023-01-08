export const ArtItem = (props, idx) => {
  return (
    <>
      <div className={idx % 2 === 0 ? 'card card-one' : 'card card-two'}>
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <div className="card-title">
            <h5 className="card-artist-title">{props.artist}</h5>
            <h5 className="drawing-price">{`$${props.price}`}</h5>
          </div>
          <div className="item-title">
            <p>{props.title}</p>
          </div>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </>
  );
};
