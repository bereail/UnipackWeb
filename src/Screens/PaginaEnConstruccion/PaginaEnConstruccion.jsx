import React from 'react';
import styles from './PaginaEnConstruccion.module.css';
import logo from '../../assets/img/logo.png'; // Ruta al logo de Unipack

const PaginaEnConstruccion = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo Unipack" className={styles.logo} />
      <h1 className={styles.titulo}>Página en construcción</h1>
      <p className={styles.texto}>Estamos trabajando para traerte una mejor experiencia. ¡Muy pronto estará disponible!</p>
    </div>
  );
};

export default PaginaEnConstruccion;
