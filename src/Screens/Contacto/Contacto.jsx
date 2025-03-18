import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './contacto.css'
import FormularioContacto from '../../components/FormContacto/FormularioContacto';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className='section-contacto' id="contacto">
      <div className='container-contacto '>
        <h1 className='title-contacto texto-parpadeante'>CONTÁCTANOS</h1>
        <div className='datos-contacto'>
          <p><strong>Dirección:</strong> PASCO 1038 – 2152 – GRANADERO BAIGORRIA</p>
          <p><strong>Teléfono:</strong> +54 341468874</p>
          <p><strong>Correo Electrónico:</strong> administracion@ultracor.com.ar</p>
         
        </div>
      </div>
      <div className='container-contacto buttons-contacto'>
        <button className="btn btn-contactar" onClick={handleModalToggle}>
          Quiero que me contacten
        </button>
      </div>

      {isModalOpen && (<FormularioContacto handleModalToggle={handleModalToggle}/>)}

    </section>
  );
};

export default Contacto;