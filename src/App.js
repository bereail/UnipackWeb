import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contacto from './Screens/Contacto/Contacto';
import Inicio from './Screens/Inicio/Inicio';
import Productos from './Screens/Productos/Productos';
import Nosotros from './Screens/Nosotros/Nosotros';
import NuestrosClientes from './Screens/NuestrosClientes/NuestrosClientes';

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignContent: "center" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <section id='Inicio'>
                    <Inicio />
                  </section>
                  <section id="Productos">
                    <Productos />
                  </section>
                  <section id="Nosotros">
                    <Nosotros />
                  </section>
                  <section id="NuestrosClientes">
                    <NuestrosClientes />
                  </section>
                  <section id="Contacto">
                    <Contacto />
                  </section>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
