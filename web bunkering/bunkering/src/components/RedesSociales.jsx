import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function RedesSociales() {
  return (
    <div className='headerRedesSociales'>
        <ul>
        <a href='#' target='_blank' ><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='#' target='_blank' ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href='#' target='_blank' ><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href='#' target='_blank' ><FontAwesomeIcon icon={faLinkedin} /></a>
        </ul>
    </div>
  )
}

export default RedesSociales