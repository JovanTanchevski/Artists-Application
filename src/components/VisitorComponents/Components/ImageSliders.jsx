import { useNavigate } from 'react-router-dom';
import { items } from '../../../data/data';
export const ImageSliders = () => {
  const navigate = useNavigate();
  const navigateToVisitorListingPage = (e) => {
    e.preventDefault();
    navigate('/visitor-listing-page');
  };
  return (
    <div className="image-slider-cont">
      <div className="container-1">
        <div className="photobanner directionNorm">
          {items.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.type}
              className="photobanner-img"
              onClick={navigateToVisitorListingPage}
            />
          ))}
        </div>
      </div>
      <div className="container-2">
        <div className="photobanner directionRev">
          {items.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.type}
              className="photobanner-img"
              onClick={navigateToVisitorListingPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
