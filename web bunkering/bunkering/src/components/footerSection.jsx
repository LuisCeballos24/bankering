import React from 'react';

const FooterSection = ({ title, content }) => {
  // Contenido del componente FooterSection
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FooterSection;