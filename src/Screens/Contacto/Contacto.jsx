import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from '../../Data/ContactInfo';
import style from './Contacto.module.css';
import FormularioContacto from '../../components/FormContacto/FormularioContacto';
import Mapa from '../../Data/Mapa';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className={style.sectionContacto} id="Contacto">
      <div className={style.containerContacto}>
        <h1 className={style.titleContacto}>CONTÁCTENOS</h1>

        <div className={style.datosContacto}>
          {ContactInfo.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        {/* Aquí se muestra el mapa */}
        <Mapa />
      </div>

      {isModalOpen && (
        <FormularioContacto handleModalToggle={handleModalToggle} />
      )}
    </section>
  );
};

export default Contacto;



/*       <div className={style.buttonsContacto}>
          <button className={style.btnContactar} onClick={handleModalToggle}>
            Quiero que me contacten
          </button>
        </div>*/