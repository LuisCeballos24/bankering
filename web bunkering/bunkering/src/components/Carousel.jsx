import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css'; // Crea este archivo para los estilos
import infoCarousel from '../json/Carousel.json'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <Slider {...settings}>
      {infoCarousel.map((i, index) => (
        <div key={index} className="carousel-item">
          <img src={i.image} alt={i.title} />
          <div className="overlay">
            <div className="title">{i.title}</div>
            <div className="description">{i.information}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
