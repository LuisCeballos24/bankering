import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import Index from './pages/Inicio'




function App() {
  return (
  <>
    <Header />
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
    <Footer />
  </>
  );
}

export default App;