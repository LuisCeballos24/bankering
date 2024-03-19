import React from 'react'

import Carousel from '../components/Carousel'
import InfoSoporte from '../components/InfoSoporte'
import InfoFotoIzquierda from '../components/InfoFotoIzquierda'
import InfoFotoDerecha from '../components/InfoFotoDerecha'
import ComentarioGigante from '../components/ComentarioGigante'
import TarjetasSplit from '../components/TarjetasSplit'

function index() {
  return (
    <div>
      <Carousel />
      <InfoFotoIzquierda image="/InfoFotoIzquierda.jpg" title="Tanker operations" desc="Our team performs all vessel operations, supervises and closely monitors every detail of the contract, strives to create a smooth link between owners and charterers. Our operators coordinate daily activities with extreme attention to every detail. We support companies with the highest standards, mitigating risks and maintaining constant relationships between all parties, improving profits by maximizing returns and reducing vessel and cargo related costs. We constantly communicate with the vessel, ports, agency, bunker suppliers, surveyor and any other related parties to ensure smooth operations. We maintain compliance with agreed terms between parties, analyze and make claims or disputes between parties and demurrage, always following contracts and agreed terms." to="#"/>
      <ComentarioGigante desc="We offer both international and domestic bunkering, supplying refind marine fuels to all types of vessels such as ships, cruise vessels, oil tankers, ferries, safaris"/>
      <InfoFotoDerecha image="/InfoFotoDerecha.webp" title="Domestic Bunkering" desc="Local fishing boats, ferries, dive boats and fun boats always have a high priority in service. The bunkering services team supplies fuel to domestic vessels anchoring in the Panamanian coasts providing an excellent service and satisfying our customers." to="#"/>
      <TarjetasSplit />
      <InfoSoporte />
    </div>
  )
}

export default index