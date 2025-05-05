import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from '../../Data/ContactInfo';
import style from './Contacto.module.css';
import FormularioContacto from '../../components/FormContacto/FormularioContacto';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className={style.sectionContacto} id="Contacto">
      <div className={style.containerContacto}>
        <h1 className={style.titleContacto}>CONTÁCTANOS</h1>

        <div className={style.datosContacto}>
          {ContactInfo.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        <div className={style.buttonsContacto}>
          <button className={style.btnContactar} onClick={handleModalToggle}>
            Quiero que me contacten
          </button>
        </div>
      </div>

      {isModalOpen && (
        <FormularioContacto handleModalToggle={handleModalToggle} />
      )}
    </section>
  );
};

export default Contacto;
