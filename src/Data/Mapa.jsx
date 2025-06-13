// src/Data/Mapa.jsx
const Mapa = () => {
  return (
    <div style={{ width: '100%', height: '400px', marginTop: '1rem' }}>
      <iframe
        title="Ubicación Unipack"
        src="https://maps.google.com/maps?q=Eva%20Peron%201700%20Granadero%20Baigorria&t=&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Mapa;
