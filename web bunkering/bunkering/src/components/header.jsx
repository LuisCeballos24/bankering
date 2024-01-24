// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="banner">Bunkering</div>
      <nav>
      <div id="logo">
      <img src="/Logo.jpg" alt="Logo de Jackie's Pet Store" width="100" height="62" />
      </div>
        <ul className="navigation-menu">
          <li><a href="#">Products</a>
            <ul className="subnav">
              <li className="card-med" id="sup-dog">
                <div className="card-image"><img src="/image1.jpg" alt="Bunkering" /></div>
                <a href="#">
                  <span>Dogs</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-cat">
                <div className="card-image"><img src="/image2.jpg" alt="Bunkering" /></div>
                <a href="#">
                  <span>Cats</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-bird">
                <div className="card-image"><img src="/image3.jpg" alt="Bird" /></div>
                <a href="#">
                  <span>Birds</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-fish">
                <div className="card-image"><img src="/Yate.jpg" alt="Fish" /></div>
                <a href="#">
                  <span>Fish</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
            </ul>
          </li>
          <li><a href="#">Services</a>
            <ul className="subnav">
              <li className="card-med" id="serv-groom">
                <div className="card-image"><img src="/image5.jpg" alt="Grooming" /></div>
                <a href="#">
                  <span>Grooming</span>
                  <span>More Info <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="serv-board">
                <div className="card-image"><img src="/image3.jpg" alt="Boarding" /></div>
                <a href="#">
                  <span>Boarding</span>
                  <span>More Info <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
            </ul>
          </li>
          <li><a href="#locate">Locations & Hours</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div id="utility">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;