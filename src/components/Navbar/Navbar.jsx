import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Para el desplazamiento suave
import styles from './NavbarStyle.module.css';  // Usando CSS Modules
import logo from '../../assets/img/logo.jpg';

const Navbar = () => {
  const sections = [
    { name: "Inicio", id: "Inicio" },
    { name: "Productos", id: "Productos" },
    { name: "Quienes Somos", id: "QuienesSomos" },
    { name: "Nuestros Clientes", id: "NuestrosClientes" },
    { name: "Contacto", id: "Contacto" },
  ];

  return (
    <nav className={styles.navbar}>  {/* Usando la clase desde el módulo CSS */}
      <div className={styles.navbarContainer}>
        <a href="#Inicio" className={styles.navbarBrand}>
          <img src={logo} alt="Logo" className={styles.logo} />  {/* Renderizando la imagen */}
        </a>
        <ul className={styles.navbarLinks}>
          {sections.map((section) => (
            <li key={section.id} className={styles.navItem}>
              <ScrollLink
                className={styles.navLink} 
                to={section.id}
                smooth={true}
                duration={500}
              >
                {section.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;