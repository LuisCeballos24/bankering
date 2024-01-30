import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import RedesSociales from './RedesSociales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocation, faLocationArrow, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hamburguesa = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(!showMenu);

  return (
    <div className='hamburguesa'>
    
      <FontAwesomeIcon icon={faBars} onClick={handleToggle} />
      
      <Offcanvas show={showMenu} onHide={handleToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Las Brisas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#Catálogo">Catálogo</Nav.Link>
            <Nav.Link href="#Compromiso">Compromiso</Nav.Link>
            <Nav.Link href="#Ubicación">Ubicación</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        <h6><FontAwesomeIcon icon={faLocationDot} /> Bella Vista, Hi Point building, 24ht Floor, Panama.<br />Copyright © 2024 Stward Corporation</h6>
        <RedesSociales />
      </Offcanvas>
    </div>
  );
};

export default Hamburguesa;


// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import RedesSociales from './RedesSociales'
// import { Link } from 'react-router-dom'

// function Hamburguesa() {

//     const activarBarra = () => {
//         barra = document.getElementsByClassName('contenidoHamburguesa')[0]
//         barra.style.display = 'block'
//         barra.style.transition = 'all .35s ease'
//         barra.style.right = '20%'
//         barra.style.display = 'block'
//     }

//   return (
//     <div className='hamburguesa'>
//         <FontAwesomeIcon icon={faBars} />
//         <section className='contenidoHamburguesa'>
//             <ul>
//                 <li><Link to="#">Catálogo</Link></li>
//                 <li><Link to="#">Compromiso</Link></li>
//                 <li><Link to="#">Ubicación</Link></li>
//                 <li><Link to="#">Contacto</Link></li>
//             </ul>
//             <RedesSociales />
//         </section>
//     </div>
//   )
// }

// export default Hamburguesa