import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
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
        <button className={styles.verProductos}>VER PRODUCTOS</button>
      </div>
      <div className={styles.inicioImagen}></div>
    </section>
  );
}

export default Inicio;
