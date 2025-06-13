import React from 'react';
import './nosotros.css';
import useObserver from '../../Hooks/useObserver';

function Nosotros() {
  const [isCardVisible, cardRef] = useObserver();
  const [isTitleVisible, setIsTitleVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="Nosotros" className="nosotros-section">
      <div className="nosotros-container">
        <h2 className={`nosotros-title ${isTitleVisible ? 'visible' : ''}`}>
          QUIENES SOMOS
        </h2>
        <h3 className="nosotros-subtitle">NUESTRA EMPRESA</h3>
        <div
          ref={cardRef}
          className={`nosotros-content ${isCardVisible ? 'fade-in' : ''}`}
        >
          <p>
            Unipack es una empresa dedicada a la fabricación y comercialización de cajas y envases de cartón corrugado. Nuestra planta de 8.000 m² está ubicada en un predio de 2 hectáreas en Granadero Baigorria, provincia de Santa Fe.
          </p>
          <p>
            Actualmente, nuestra capacidad productiva excede los más de 50.000.000 de metros cuadrados de cartón al año.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Nosotros;
/*
        <div className="certificaciones-container">
          <button className="btn-certificado">CERTIFICACIONES</button>
          <button className="btn-certificado">CERTIFICACIONES</button>
        </div>*/