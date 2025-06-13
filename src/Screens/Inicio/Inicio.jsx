import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {

  const handleClick = () => {
    const section = document.getElementById('Productos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <section className={styles.inicioSection}>
      <div className={styles.inicioContent}>
        <h1 className={styles.inicioTitle}>
          <span className={styles.inicioSlogan}>
            Unipack es una empresa dedicada a la fabricación y comercialización de cajas y envases de cartón corrugado
          </span>
        </h1>
        <p className={styles.inicioParagraphExplora}>
          Creamos envases de cartón corrugado que impulsan tu negocio. Diseño, calidad y sustentabilidad a medida.
        </p>


      </div>
      <div className={styles.inicioImagen}></div>
    </section>
  );
}

export default Inicio;
/*        <button className={styles.verProductos} onClick={handleClick}>
  VER PRODUCTOS
</button>*/