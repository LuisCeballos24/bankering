// LocationSection.js
import React from 'react';

function LocationSection() {
  return (
    <section id="locate">
      <div>
        <h2>Location &amp; Hours</h2>
        <p>Our knowledgeable and friendly staff is always ready to assist you in making the best choices for your furry, feathered, or finned friends.</p>
        <div className="btn-group">
          <button className="btn-filled-dark">
            <span className="material-symbols-outlined">pin_drop</span>
            Find a Store
          </button>
          <button className="btn-outline-dark btn-hover-color">
            <span className="material-symbols-outlined">contact_support</span>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;