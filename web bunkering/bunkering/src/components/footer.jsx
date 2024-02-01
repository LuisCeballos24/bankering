import React from 'react'
import logo from '/Logo.jpg'
import ChinaCarguero from '/cuadradas/China-carguero-Cosco.jpg'
import YateEnVenta from '/cuadradas/Yate-en-venta.jpg'
import RedesSociales from './RedesSociales'
import DerechosReservados from './DerechosReservados'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <>
      <footer id='footer'>
        <div className='footerLogo'>
          <img src={logo} alt="" />
          <p>Stward Corporation was founded on September 2002, with the purpose of becoming the leading company in Panama Maritime sector.</p>
        </div>
        <div className='otrosEnlaces'>
          <h5>Otros Enlaces</h5>
          <ul>
            <li><Link to="#">Catálogo</Link></li>
            <li><Link to="#">Compromiso</Link></li>
            <li><Link to="#">Ubicación</Link></li>
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
            <p>Office 1: (+507) XXX-XXXX</p>
          </section>
          <section>
            <h5>Launch Service:</h5>
            <p>
              sales@brisasenterprises.com
              (+507) XXX-XXXX
            </p>
          </section>
          <section>
            <h5>Bunkering Service:</h5>
            <p>
              sales@brisasenterprises.com
              sales@brisasenterprises.com
              (+507) XXX-XXXX
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