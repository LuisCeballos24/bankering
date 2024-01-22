import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className="main-header">
      <div className="header-icons">
        {/* Redes Sociales */}
        <div className="social-icons">
          <a target="_blank" href="enlace-a-facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a target="_blank" href="enlace-a-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a target="_blank" href="enlace-a-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a target="_blank" href="enlace-a-youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a target="_blank" href="enlace-a-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>

        {/* Menú Emergente */}
        <div className="menu-popup">
          {/* Contenido del menú emergente */}
        </div>
      </div>

      {/* Logo */}
      <Link to="/" className="logo">
        <img src="/Bunker-fuels-3.png" alt="Logo" />
      </Link>

      {/* Botón de Topup Fuel Credit */}
      <Link to="/topup" className="topup-button">
        <div className="button-content">
          <span>Topup Fuel Credit</span>
          <span>Topup Fuel Credit</span>
        </div>
        <i className="fas fa-chevron-right"></i>
      </Link>
    </header>
  );
}

export default Header;