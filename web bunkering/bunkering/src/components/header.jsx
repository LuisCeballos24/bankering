// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="banner">Bunkering</div>
      <nav>
      <div id="logo">
      <img src="/Logo.jpg" alt="Logo de Jackie's Pet Store" width="100" height="62" />
      Jackie's <br /> Pet Store
      </div>
        <ul className="navigation-menu">
          <li><a href="#">Products</a>
            <ul className="subnav">
              <li className="card-med" id="sup-dog">
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/qPvaAv2gxwM3l0z7dl_eoh9v6h58HlzewBUfEgX6AZE/rs:fit:368:386/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIv/ZmM4YjNlYmItMDNj/Ni00NGM3LTliNGUt/YTUyOWUzOGU4NTE2/LnBuZw.png" alt="Dog" /></div>
                <a href="#">
                  <span>Dogs</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-cat">
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/US6gJ6fHUOJqruLB7KDe5zEa82iDSp7OdO-bv-aLtvU/rs:fit:368:310/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjU5/LzdmOWU1ZjU4LTMx/ZDQtNDgwNS1iM2E2/LWM3NzgyMTcyNzJh/NC5wbmc.png" alt="Cat" /></div>
                <a href="#">
                  <span>Cats</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-bird">
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/6OkSfKKP476ZKzGJoDlXfXuWzX-vjlDRotIVMTz3lmo/rs:fit:368:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzA1/LzRkNmI1YjIwLTQy/YWQtNDVlMC05ZDI5/LTA0MTkyMWZkNWE1/NS5wbmc.png" alt="Bird" /></div>
                <a href="#">
                  <span>Birds</span>
                  <span>Shop All <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="sup-fish">
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/41Pv7w9rcbn7II_gB2vwvVCQRYE5mvpca1ZbsvMujR0/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjE5/LzRlZjE1YTgyLTI3/NjYtNDlkNC1hMGE3/LWY4ZjRmNzhjM2M5/NS5wbmc.png" alt="Fish" /></div>
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
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" alt="Grooming" /></div>
                <a href="#">
                  <span>Grooming</span>
                  <span>More Info <span className="material-symbols-outlined">arrow_forward</span></span>
                </a>
              </li>
              <li className="card-med" id="serv-board">
                <div className="card-image"><img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZDI5/LTZjYzBhNGU3ODg0/NC5wbmc.png" alt="Boarding" /></div>
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