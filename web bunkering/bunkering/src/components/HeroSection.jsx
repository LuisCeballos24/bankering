import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeroSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia esta opción para ajustar la velocidad de cambio
  };

  return (
    <section className="hero">
      <Slider {...sliderSettings}>
        <div>
          <img src="/Yate.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/Bunker-fuels-3.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/Captura de pantalla 2024-01-22 182533.png" alt="Slide 3" />
        </div>
        <div>
          <img src="/LNG feeder at terminal (iStock) resize.jpg" alt="Slide 4" />
        </div>
        {/* Agrega más elementos div con imágenes según sea necesario */}
      </Slider>
      <h1>Your One-Stop Shop for Every Pet's Needs!</h1>
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