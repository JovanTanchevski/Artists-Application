import './Styles/VisitorStyle.scss';
import './Styles/VisitorHomePageSlider.css';
import { ImageSliders } from './Components/ImageSliders';
import { VisitorHomeCarousel } from './Components/VisitorHomeCarousel';
export const VisitorHomePage = () => {
  return (
    <>
      <div className="visitor-home-page-content">
        <div className="visitor-home-page-title">
          <div className="title-content">
            <h2>
              Looking for <br /> masterpiece?
            </h2>
            <button>Find one now!</button>
          </div>
        </div>
        <div className="visitor-home-page-pictures">
          <ImageSliders />
        </div>
        <div className="visitor-home-page-carousel">
          <VisitorHomeCarousel />
        </div>
      </div>
    </>
  );
};
