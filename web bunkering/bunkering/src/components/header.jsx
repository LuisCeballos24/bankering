import React from 'react'
import logo from '/Logo.jpg'
import RedesSociales from './RedesSociales'
import { Link } from 'react-router-dom'
import Hamburguesa from './Hamburguesa'


function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logo} alt="Logo de Las Brisas" />
        <h2>Las Brisas</h2>
        <ul className='headerSecciones'>
          <li><Link to="#">Catálogo</Link></li>
          <li><Link to="/compromiso">Compromiso</Link></li>
          <li><Link to="#">Ubicación</Link></li>
          <li><Link to="#">Contacto</Link></li>
        </ul>
        <RedesSociales />
        <Hamburguesa />
      </div>
    </div>
  )
}

export default Header