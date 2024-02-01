import React from "react";

function TarjetasSplit() {
  return (
    <>
      <div className="titulo">
        <h2>Nuestro Compromiso</h2>
      </div>
      <div className="rectangulo">
        <div className="card">
          <h3 className="title">Mision</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div className="texto">
              <p>
                Cumplir con todos los requerimientos exigidos por nuestros
                clientes; nuestra prioridad proveer productos de alta calidad,
                cumpliendo con todas las regulaciones y medidas de seguridad;
                para entregar siempre a tiempo y de forma comprometida.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="title">Vision</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div className="texto">
              <p>
                Ser una empresa con un modelo inspirador reconocido por nuestros
                clientes, proveedores y la comunidad, integrando el talento
                humano, los conocimientos, la tecnología y la experiencia para
                impulsar el sector marítimo.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="title">Valores</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div className="texto">
              <p>
                A través de nuestra experiencia, atender a nuestros clientes
                cumpliendo con los mayores estándares de calidad.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="title">Objetivos</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div className="texto">
              <ul>
                <li>Sentido de pertenencia </li>
                <li>Conocimientos</li>
                <li>Calidad del Servicio al cliente</li>
                <li>Seguridad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetasSplit;
