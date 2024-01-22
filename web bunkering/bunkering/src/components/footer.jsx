import React from 'react';
import FooterSection from './footerSection';

function Footer() {
  return (
    <footer>
      <div className="footer-sections">
        <FooterSection title="Sección 1" content="Contenido de la sección 1." />
        <FooterSection title="Sección 2" content="Contenido de la sección 2." />
        <FooterSection title="Sección 3" content="Contenido de la sección 3." />
        <FooterSection title="Sección 4" content="Contenido de la sección 4." />
      </div>
      {/* ... Resto del footer ... */}
    </footer>
  );
}

export default Footer;