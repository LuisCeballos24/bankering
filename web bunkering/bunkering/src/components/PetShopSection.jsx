// PetShopSection.js
import React from 'react';

function PetShopSection() {
  return (
    <section>
      <h2>Shop by Pet</h2>

      <ul className="shop-pets">
        <li className="card-large card-light" id="sup-dog">
          <div className="card-image">
            <img src="https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png" />
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
            <img src="https://ouch-cdn2.icons8.com/RjiKOF2gGKiIVnIMFi0O1a4aU7DoHfhbkXr2JbUYZ3A/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzEy/LzliNDQ3MmVlLWZh/YjMtNDQwNy1iOWVh/LWMwOTdlYWNjNWE3/NS5wbmc.png" />
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