import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './NavbarStyle.module.css';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");

  const sections = [
    { name: "INICIO", id: "Inicio" },
   /* { name: "NUESTROS PRODUCTOS", id: "Productos" },*/
    { name: "QUIENES SOMOS", id: "QuienesSomos" },
    { name: "NUESTROS CLIENTES", id: "Nuestros Clientes" },
    { name: "CONTACTO", id: "Contacto" },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img src={logo} alt="Unipack Logo" className={styles.logo} />

        <nav className={`${styles.navbarLinks} ${menuOpen ? styles.active : ""}`}>
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className={`${styles.navLink} ${activeSection === section.id ? styles.activeLink : ''}`}
              onClick={() => {
                setActiveSection(section.id);
                setMenuOpen(false);
              }}
            >
              {section.name}
            </ScrollLink>
          ))}
        </nav>

        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;