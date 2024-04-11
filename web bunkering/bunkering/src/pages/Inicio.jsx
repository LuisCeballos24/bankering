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
      <InfoFotoDerecha image="/image9.jpg" title="Tanker operations" desc="Our team performs all vessel operations, supervises and closely monitors every detail of the contract, strives to create a smooth link between owners and charterers. Our operators coordinate daily activities with extreme attention to every detail. We support companies with the highest standards, mitigating risks and maintaining constant relationships between all parties, improving profits by maximizing returns and reducing vessel and cargo related costs. We constantly communicate with the vessel, ports, agency, bunker suppliers, surveyor and any other related parties to ensure smooth operations. We maintain compliance with agreed terms between parties, analyze and make claims or disputes between parties and demurrage, always following contracts and agreed terms." to="#"/>      <ComentarioGigante desc="We offer both international and domestic bunkering, supplying refind marine fuels to all types of vessels such as ships, cruise vessels, oil tankers, ferries, safaris"/>
      <InfoFotoDerecha image="/InfoFotoDerecha.webp" title="Domestic Bunkering" desc="Local fishing boats, ferries, dive boats and fun boats always have a high priority in service. The bunkering services team supplies fuel to domestic vessels anchoring in the Panamanian coasts providing an excellent service and satisfying our customers." to="#"/>
      <InfoFotoIzquierda image="/image6.jpg" title="Who we are" desc="We are one of the strongest and most responsible bunkering companies in the Americas. Our company is totally independent and dedicated to the bunkering of Ships, super and mega yachts, cruise ships and deep draft vessels. We have the experience and the know-how, but always looking to improve every day,but always seeking to improve every detail of the business to satisfy our customers with safety, quality and excellence. quality and excellence, complying with all the regulations and safety measures, to deliverregulations and safety measures; to always deliver on time and in a committed way. committed." to="#"/>
      <ComentarioGigante desc="We are your best option in fuel supply"/>
      <InfoFotoDerecha image="/image7.jpg" title="Professionals at your service" desc="Las Brisas Enterprise is formed by a group of professionals with more than 20 years of experience in the maritime business. With a professional and technological development based on international standards and actively developing new ways to achieve the best performance and benefits. We provide ideas, forms and analysis according to each business and adapted to the need of each one, we know that each business is different and each client deserves the best. Las Brisas Enterprise, is also a company thought in a green and clean world. Where we encourage our clients to develop environmental programs and activities to reduce emissions and contribute to our seas." to="#"/>
      <InfoFotoIzquierda image="/image8.jpg" title="Our objectives and vision" desc="To be a company with an inspiring model recognized by our clients, suppliers and the community, integrating human talent, knowledge, technology and experience to drive the maritime sector." to="#"/>  
      <InfoSoporte />
    </div>
  )
}

export default index