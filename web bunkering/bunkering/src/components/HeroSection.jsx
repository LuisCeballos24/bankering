import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css'; // Crea este archivo para los estilos

const imagesData = [
  {
    title: 'Imagen 1',
    description: 'Descripción de la Imagen 1',
    imageUrl: 'http://localhost:5173/image1.jpg',
  },
  {
    title: 'Imagen 2',
    description: 'Descripción de la Imagen 2',
    imageUrl: 'http://localhost:5173/image2.jpg',
  },
  {
    title: 'Imagen 3',
    description: 'Descripción de la Imagen 3',
    imageUrl: 'http://localhost:5173/image3.jpg',
  },
  {
    title: 'Imagen 4',
    description: 'Descripción de la Imagen 4',
    imageUrl: 'http://localhost:5173/image4.jpg',
  },
  // Añade más objetos para más imágenes
];

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
      {imagesData.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image.imageUrl} alt={image.title} />
          <div className="overlay">
            <div className="title">{image.title}</div>
            <div className="description">{image.description}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
