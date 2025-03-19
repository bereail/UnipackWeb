import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section className={styles.inicioSection}>
      <div className={styles.inicioOverlay}></div>
      <div className={styles.inicioContent}>
        <h1 className={styles.inicioTitle}>
          <span className={styles.inicioSlogan}>Unipack es una empresa dedicada a la fabricación y comercialización de cajas y envases de cartón corrugado</span>
        </h1>
        <p className={styles.inicioParagraphExplora}>
        Nuestra planta de 8.000 m² esta ubicada en un predio de 2 hectareas en Granadero Baigorria, provincia de Santa Fé. Actualmente, nuestra capacidad productiva es de más de 50.000.000 de metros cuadrados de cartón al año.

       </p>
      </div>
    </section>
  );
}

export default Inicio;