// PetShopSection.js
import React from 'react';

function PetShopSection() {
  return (
    <section>
      <h2>Shop by Pet</h2>

      <ul className="shop-pets">
        <li className="card-large card-light" id="sup-dog">
          <div className="card-image">
            <img src="/Captura de pantalla 2024-01-22 182533.png" />
          </div>
          <ul>
            Dogs
            <li><a href="#">Food &amp; Treats</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Beds &amp; Furniture</a></li>
            <li><a href="#">Outdoor Supplies</a></li>
            <li><a href="#">Clothing</a></li>

            <button className="btn-outline-light">Shop All<span className="material-symbols-outlined">arrow_forward</span></button>
          </ul>
        </li>

        <li className="card-large card-dark" id="sup-cat">
          <div className="card-image">
            <img src="/Captura de pantalla 2024-01-22 182439.png" />
          </div>
          <ul>Cats
            <li><a href="#">Food &amp; Treats</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Beds &amp; Furniture</a></li>
            <button className="btn-outline-dark">Shop All<span className="material-symbols-outlined">arrow_forward</span></button>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default PetShopSection;