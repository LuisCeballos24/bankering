import React from "react";

function TarjetasSplit() {
  return (
    <>
      <div className="titulo">
        <h2>Nuestro Compromiso</h2>
      </div>
      <div className="rectangulo">
        <div class="card">
          <h3 class="title">Mision</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
            <div class="texto">
              <p>
                Cumplir con todos los requerimientos exigidos por nuestros
                clientes; nuestra prioridad proveer productos de alta calidad,
                cumpliendo con todas las regulaciones y medidas de seguridad;
                para entregar siempre a tiempo y de forma comprometida.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="title">Vision</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
            <div class="texto">
              <p>
                Ser una empresa con un modelo inspirador reconocido por nuestros
                clientes, proveedores y la comunidad, integrando el talento
                humano, los conocimientos, la tecnología y la experiencia para
                impulsar el sector marítimo.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="title">Valores</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
            <div class="texto">
              <p>
                A través de nuestra experiencia, atender a nuestros clientes
                cumpliendo con los mayores estándares de calidad.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="title">Objetivos</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
            <div class="texto">
              <h6 className="textoLista">
                Sentido de pertenencia 
              </h6>
              <h6 className="textoLista">
                Conocimientos
              </h6>
              <h6 className="textoLista">
                Calidad del Servicio al cliente
              </h6>
              <h6 className="textoLista">
                Seguridad
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetasSplit;
