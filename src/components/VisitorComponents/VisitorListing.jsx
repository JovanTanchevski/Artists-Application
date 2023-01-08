import { useState } from 'react';
import { items } from '../../data/data';
import './Styles/Card.scss';
import { useEffect } from 'react';
import { VisitorFilterForm } from './Components/VisitorFilterForm';
export const VisitorListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [artists, setArtists] = useState([]);
  const [artistItems, setArtistItems] = useState([]);
  useEffect(() => {
    setArtistItems(items);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  const openFiltersHandler = () => {
    setIsFilterOpen(true);
  };
  const closeFilterHandler = () => {
    setIsFilterOpen(false);
  };
  return (
    <div className="visitor-listing-page">
      {!isFilterOpen && (
        <>
          <i
            className="fas fa-bars filter-btn"
            onClick={openFiltersHandler}
          ></i>
          <div className="cardContainer">
            {artistItems.map((item, idx) => (
              <div
                key={item.id}
                className={idx % 2 === 0 ? 'card card-one' : 'card card-two'}
              >
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.name}
                />
                <div className="card-body">
                  <div className="card-title">
                    <h5 className="card-artist-title">{item.artist}</h5>
                    <h5 className="drawing-price">{`$${item.price}`}</h5>
                  </div>
                  <div className="item-title">
                    <p>{item.title}</p>
                  </div>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {isFilterOpen && (
        <VisitorFilterForm
          artists={artists}
          closeHandler={closeFilterHandler}
        />
      )}
    </div>
  );
};
