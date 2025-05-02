import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from '../../Data/ContactInfo';
import FormularioContacto from '../../components/FormContacto/FormularioContacto';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className={styles.sectionContacto} id="contacto">
      <div className={styles.containerContacto}>
        <h2 className={styles.titleContacto}>Contáctanos</h2>
        <div className={styles.datosContacto}>
          {ContactInfo.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        <button className={styles.btnContactar} onClick={handleModalToggle}>
          Quiero que me contacten
        </button>
      </div>

      {isModalOpen && (
        <FormularioContacto handleModalToggle={handleModalToggle} />
      )}
    </section>
  );
};

export default Contacto;
