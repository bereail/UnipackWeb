import './App.css';
import PaginaEnConstruccion from './Screens/PaginaEnConstruccion/PaginaEnConstruccion';

function App() {
  return (
    <PaginaEnConstruccion />
  );
}

export default App;
/*
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contacto from './Screens/Contacto/Contacto';
import Inicio from './Screens/Inicio/Inicio';
import Productos from './Screens/Productos/Productos';
import Nosotros from './Screens/Nosotros/Nosotros';
import NuestrosClientes from './Screens/NuestrosClientes/NuestrosClientes';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import PaginaEnConstruccion from './Screens/PaginaEnConstruccion/PaginaEnConstruccion';
import { useEffect } from 'react';
import WhatsAppButton from './Hooks/WhatsAppButton';

// 🔄 Scroll automático si hay hash en la URL
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

// 🏠 Página principal con secciones
function LandingPage() {
  return (
    <div>
      <section id="Inicio">
        <Inicio />
      </section>
      <section id="NuestrosClientes">
        <NuestrosClientes />
      </section>
      <section id="QuienesSomos">
        <Nosotros />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
}

// 🌐 App principal
function App() {
  return (
    <Router>
      <ScrollToHash />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/construccion" element={<PaginaEnConstruccion />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton /> 
      </div>
    </Router>
  );
}

export default App;
/*     <section id="Productos">
        <Productos />
      </section>*/