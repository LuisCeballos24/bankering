import React from 'react'
import logo from '/Logo.png'
import ChinaCarguero from '/cuadradas/China-carguero-Cosco.jpg'
import YateEnVenta from '/cuadradas/Yate-en-venta.jpg'
import RedesSociales from './RedesSociales'
import DerechosReservados from './DerechosReservados'
import { HashLink } from 'react-router-hash-link'

function footer() {
  return (
    <>
      <footer id='footer'>
        <div className='footerLogo'>
          <img src={logo} alt="" />
          <p>Brisas Corporation was founded on September, with the purpose of becoming the leading company in Panama Maritime sector.</p>
        </div>
        <div className='otrosEnlaces'>
          <h5>Otros Enlaces</h5>
          <ul>
          <li><HashLink smooth to="/#catalogo" >Catalogue</HashLink></li>
          <li><HashLink to="/compromiso" >About us</HashLink></li>
          <li><HashLink smooth to="/#footer">location</HashLink></li>
          <li><HashLink smooth to="/#contacto">contact</HashLink></li>
          </ul>
        </div>
        <div className='postsRecientes'>
          <h5>Posts Recientes</h5>
          <section>
            <img src={ChinaCarguero} alt="" />
            <div>
              <h6>Diciembre 21, 2023</h6>
              <p>Stward is getting ready to launch its highly...</p>
            </div>
          </section>
          <section>
            <img src={YateEnVenta} alt="" />
            <div>
              <h6>Diciembre 18, 2023</h6>
              <p>Mother's Day Celebration at Stward Corporation</p>
            </div>
          </section>
        </div>
        <div className='footerContactos'>
          <section>
            <h5>Contat us 24 hours:</h5>
            <p>Office 1: (+507) 6679-1225</p>
          </section>
          <section>
            <h5>Launch Service:</h5>
            <p>
              sales@brisasenterprises.com
              (+507) 6679-1225
            </p>
          </section>
          <section>
            <h5>Bunkering Service:</h5>
            <p>
              sales@brisasenterprises.com
              sales@brisasenterprises.com
              (+507) 6679-1225
            </p>
          </section>
          <section className='sectionFooterRedesSociales'>
            <RedesSociales />
          </section>
        </div>
      </footer>
      <DerechosReservados />
    </>
  )
}

export default footer