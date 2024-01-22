import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Importa BrowserRouter
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <Router> {/* Agrega el componente Router */}
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;