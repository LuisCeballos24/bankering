import React from 'react'
import logo from '/Logo.jpg'
import RedesSociales from './RedesSociales'


function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logo} alt="Logo de Las Brisas" />
        <h2>Las Brisas</h2>
        <ul className='headerSecciones'>
          <li>Catálogo</li>
          <li>Compromiso</li>
          <li>Ubicación</li>
          <li>Contacto</li>
        </ul>
        <RedesSociales />
      </div>
    </div>
  )
}

export default Header