// PetShopSection.js
import React from 'react';
import Imagen1 from '../../public/image1.jpg'


function PetShopSection() {
  return (
    <section className='petShopSection'>
      <img src={Imagen1} alt="" className='imagen1'/>
      <div className='cardInfo'>
        <h3>International Bunkering</h3>
        <ul>
          <li>Food & Treats</li>
          <li>Toys</li>
          <li>Beds & Furniture</li>
          <li>Outdoor Supplies</li>
          <li>Clothing</li>
        </ul>
      </div>
    </section>
  );
}

export default PetShopSection;