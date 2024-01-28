import React from 'react'

import Carousel from '../components/Carousel'
import InfoSoporte from '../components/InfoSoporte'
import InfoFotoIzquierda from '../components/InfoFotoIzquierda'
import InfoFotoDerecha from '../components/InfoFotoDerecha'
import ComentarioGigante from '../components/ComentarioGigante'

function index() {
  return (
    <div>
      <Carousel />
      <InfoFotoIzquierda image="/InfoFotoIzquierda.jpg" title="International Bunkering" desc="The Hawks Pvt Ltd is committed to serving their esteemed clients such as super and mega yachts, cruisers, and navy vessels at any location in the Maldives. We are proud to offer our clients special bunker vessels to easily deliver fuel to crafts anchoring within the island nation, especially in Exclusive Economic Zones (EEZ)." to="#"/>
      <ComentarioGigante desc="We offer both international and domestic bunkering, supplying refind marine fuels to all types of vessels such as ships, cruise vessels, oil tankers, ferries, safaris"/>
      <InfoFotoDerecha image="/InfoFotoDerecha.webp" title="Domestic Bunkering" desc="Local fishing vessels, ferry boats, diving boats, and safaris are always given a high priority in service. The bunkering service team provides fuel mainlt to the domestic vessels anchoring in Male', Hulhumale', and close to the second fuel storage on Kamadhoo Island, Baa Atoll." to="#"/>
      <InfoSoporte />
    </div>
  )
}

export default index