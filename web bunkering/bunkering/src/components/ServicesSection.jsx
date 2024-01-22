// ServicesSection.js
import React from 'react';

function ServicesSection() {
  return (
    <section>
      <h2>Our Services</h2>

      <ul className="services">
        <li className="card-large card-dark card-wide" id="serv-groom">
          <div className="card-image">
            <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" />
          </div>
          <ul>
            Dog Grooming<span className="subtitle">Tail-wagging transformations are our specialty.</span>
            <li><a href="#">Coat Care</a><span>$80</span></li>
            <li><a href="#">Nail Care</a><span>$16</span></li>
            <li><a href="#">Doggie Deluxe Spa Day</a><span>$160</span></li>
            <button className="btn-filled-dark">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Now
            </button>
          </ul>
        </li>

        <li className="card-large card-dark card-wide" id="serv-board">
          <div className="card-image">
            <img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png" />
          </div>
          <ul>
            Dog Boarding<span className="subtitle">Where fun and care never take a day off.</span>
            <li><a href="#">Doggie Daycare</a><span>$80</span></li>
            <li><a href="#">Short Term Boarding</a><span>$80</span></li>
            <button className="btn-filled-dark">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Now
            </button>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default ServicesSection;