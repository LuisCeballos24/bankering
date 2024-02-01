import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function InfoFotoIzquierda(props) {
  return (
    <div className='infoFotoIzquierda' id="catalogo">
        <section className='seccionInfoFotoIzq'>
            <img src={props.image} alt="" />
        </section>
        <section className='seccionInfoFotoIzq2'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <Link to={props.to}>Inquire<span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
        </section>
    </div>
  )
}

export default InfoFotoIzquierda