import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function InfoFotoDerecha(props) {
  return (
    <div className='infoFotoIzquierda infoFotoIzquierda2'>
        <section className='seccionInfoFotoIzq2'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <Link to={props.to}>Inquire<span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
        </section>
        <section className='seccionInfoFotoIzq'>
            <img src={props.image} alt="" />
        </section>
    </div>
  )
}

export default InfoFotoDerecha