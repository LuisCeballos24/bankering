import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection';
import PetShopSection from './components/PetShopSection';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PetShopSection />
      <ServicesSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;