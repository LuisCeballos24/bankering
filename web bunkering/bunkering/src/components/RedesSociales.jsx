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
        <a href='#' ><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='#' ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href='#' ><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href='#' ><FontAwesomeIcon icon={faLinkedin} /></a>
        </ul>
    </div>
  )
}

export default RedesSociales