import { carouselData } from '../../../data/carouselData';
import Carousel from 'react-bootstrap/Carousel';

export const VisitorHomeCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <Carousel variant="dark">
          {carouselData.map((CR) => {
            return (
              <Carousel.Item>
                <img src={CR.img} alt="First slide" />
                <Carousel.Caption>
                  <p className="text-white bg-dark ">{CR.carouselText}.</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
