import React from 'react';
import useObserver from '../../Hooks/useObserver';
import logo from '../../assets/img/logo.png';
import styles from './MisionVision.module.css';

const MisionVision = () => {
  const [isMissionVisible, missionRef] = useObserver();
  const [isVisionVisible, visionRef] = useObserver();

  return (
    <section className={styles.sectionFilosofiaContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo de la empresa" className={styles.img} />
      </div>
      <div className={styles.contentFilosofiaContainer}>
        <div
          ref={missionRef}
          className={`${styles.contentFilosofia} ${isMissionVisible ? styles.slideLeft : ''}`}
        >
          <h3 className={styles.title}>Misión</h3>
          <p className={styles.description}>
            Proveer soluciones extraordinarias en envases y embalajes, contribuyendo a reducir el impacto ecológico de las actividades de nuestros clientes.
          </p>
        </div>
        <div
          ref={visionRef}
          className={`${styles.contentFilosofia} ${isVisionVisible ? styles.slideRight : ''}`}
        >
          <h3 className={styles.title}>Visión</h3>
          <p className={styles.description}>
            Ser líderes en el desarrollo de soluciones innovadoras en envases y embalajes, contribuyendo al crecimiento sostenible de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
