import React from 'react'
import logo from '/Logo.jpg'
import RedesSociales from './RedesSociales'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logo} alt="Logo de Las Brisas" />
        <h2>Las Brisas</h2>
        <ul className='headerSecciones'>
          <li><Link to="#">Catálogo</Link></li>
          <li><Link to="#">Compromiso</Link></li>
          <li><Link to="#">Ubicación</Link></li>
          <li><Link to="#">Contacto</Link></li>
        </ul>
        <RedesSociales />
      </div>
    </div>
  )
}

export default Header