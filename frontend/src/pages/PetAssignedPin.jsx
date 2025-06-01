import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/londrina-solid';

const PetAssignedPin = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Londrina Solid', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    ellipse: {
      width: '110%',
      height: '75%',
      top: '-45%',
      left: '-5%',
      position: 'absolute',
      background: '#2D2432',
      borderRadius: '50%',
      border: '20px #2D2432 solid',
    },
    image: {
      width: 'clamp(150px, 40vw, 200px)',
      height: 'clamp(150px, 40vw, 200px)',
      borderRadius: '30px',
      marginTop: '5rem',
      objectFit: 'cover',
      border: '3px solid rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    name: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      zIndex: 1,
      color: '#000',
    },
    species: {
      fontSize: '1.5rem',
      color: '#2D2432',
      zIndex: 1,
    },
    gender: {
      color: '#F4B942',
      fontSize: '1.5rem',
      zIndex: 1,
    },
    age: {
      fontSize: '1.2rem',
      color: '#78588A',
      zIndex: 1,
      marginBottom: '1rem',
    },
    pinLabel: {
      marginTop: '1.5rem',
      fontSize: '1rem',
      letterSpacing: '2px',
      zIndex: 1,
    },
    pinText: {
      fontSize: '0.9rem',
      color: '#555',
      marginBottom: '1rem',
      zIndex: 1,
    },
    qr: {
      width: '180px',
      height: '180px',
      zIndex: 1,
    },
    code: {
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      zIndex: 1,
    },
    backArrow: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 2,
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: '#2D2432',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.ellipse}></div>

      <div style={styles.backArrow} onClick={() => navigate(-1)}>←</div>

      <img
        src="/images/roxy.png" // <- substitui com o caminho real da imagem da Roxy
        alt="Roxy"
        style={styles.image}
      />

      <div style={styles.name}>Roxy</div>
      <div style={styles.species}>
        Dog <span style={styles.gender}>(Female)</span>
      </div>
      <div style={styles.age}>5 years old</div>

      <div style={styles.pinLabel}>PIN</div>
      <div style={styles.pinText}>Present this to the pet-care taker</div>

      <img
        src="/images/roxy-qr.png" // <- substitui com o caminho real do QR code
        alt="Roxy QR"
        style={styles.qr}
      />
      <div style={styles.code}>QrsTJSdFF99</div>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home-on.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img src="/images/map.svg" alt="Map" style={styles.footerIconImage} />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerSettings')}
          />
        </div>
      </div>
    </div>
  );
};

export default PetAssignedPin;
