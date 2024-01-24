import React from 'react';

function Footer() {
  return (
    <footer>
      <section>
        <h4>About Us</h4>
        <ul>
          <li>Our Story</li>
          <li>Our Timeline</li>
          <li>Our Management</li>
          <li>Our Team</li>
          <li>Our Locations</li>
          <ul>
            <li>Colombo Office</li>
            <li>UAE Office</li>
            <li>Singapore Office</li>
          </ul>
        </ul>
      </section>

      <section>
        <h4>Products</h4>
        <ul>
          <li>Our Products</li>
          <li>Follow us on social media</li>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </ul>
      </section>

      <section>
        <h4>Contact us on</h4>
        <address>
          H. Zoneriya, 7th floor,<br />
          Boduthakurufaanu Magu, Malé<br />
          20057, Republic of Maldives<br />
          Contact: 00960 3344949<br />
          Email: info@thehawks.biz<br />
        </address>
        <button>Inquire</button>
      </section>
    </footer>
  );
}

export default Footer;