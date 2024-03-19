import React from 'react'
import logo from '/Logo.png'
import RedesSociales from './RedesSociales'
import Hamburguesa from './Hamburguesa'
import { HashLink } from 'react-router-hash-link'


function Header() {
  
  return (
    <div className='header'>
      <div>
        <HashLink smooth to="/" ><img src={logo} alt="Logo de Las Brisas" /></HashLink>
        
        <h2>Las Brisas</h2>
        <ul className='headerSecciones'>
          <li><HashLink smooth to="/#catalogo" >Catalogue</HashLink></li>
          <li><HashLink to="/compromiso" >About us</HashLink></li>
          <li><HashLink smooth to="/#footer">Location</HashLink></li>
          <li><HashLink smooth to="/#contacto">Contact</HashLink></li>
        </ul>
        <RedesSociales />
        <Hamburguesa />
      </div>
    </div>
  )
}

export default Header