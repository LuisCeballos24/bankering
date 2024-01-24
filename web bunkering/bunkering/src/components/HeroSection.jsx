import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap // Importa tu archivo de estilos personalizado

// Importa las imágenes directamente
import yateImage from '/Yate.jpg';
import image1 from '/image1.jpg';
import image2 from '/image2.jpg';
import image3 from '/image3.jpg';

const images = [yateImage, image1, image2, image3];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="hero">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img
                src={image}
                className="d-block w-100 img-fluid"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="btn-group">
        <button className="btn-filled-dark">
          <span className="material-symbols-outlined">shopping_cart</span> Shop All Products
        </button>
        <button className="btn-outline-dark btn-hover-color">
          <span className="material-symbols-outlined">calendar_month</span> Book a Service
        </button>
      </div>
    </section>
  );
}

export default HeroSection;