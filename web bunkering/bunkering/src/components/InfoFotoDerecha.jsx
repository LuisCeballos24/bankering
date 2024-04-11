import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'

function InfoFotoDerecha(props) {
  return (
    <div className='infoFotoIzquierda infoFotoIzquierda2'>
        <section className='seccionInfoFotoIzq2'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <HashLink smooth to="/#contacto">Inquire<span><FontAwesomeIcon icon={faArrowRight} /></span></HashLink>
        </section>
        <section className='seccionInfoFotoIzq'>
            <img src={props.image} alt="" />
        </section>
    </div>
  )
}

export default InfoFotoDerecha