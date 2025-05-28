import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PetMenu = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    ellipse: {
      position: 'absolute',
      width: '180vw',
      height: '180vw',
      top: '-80vw',
      left: '-40vw',
      background: 'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
      borderRadius: '9999px',
      border: '2vw solid #FFB062',
      zIndex: 0,
    },
    catImage: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      marginTop: '5vh',
      borderRadius: '40px',
      border: '3px solid rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    textGroup: {
      textAlign: 'center',
      color: '#2D2432',
      fontFamily: 'Londrina Solid',
      marginTop: '1rem',
      zIndex: 1,
    },
    name: {
      fontSize: '2.5rem',
    },
    detail: {
      fontSize: '1.2rem',
      color: '#FECD63',
    },
    age: {
      fontSize: '1rem',
      color: '#78588A',
    },
    type: {
      fontSize: '1rem',
      color: '#380D51',
    },
    button: {
      width: '80%',
      maxWidth: '300px',
      height: '60px',
      background: '#2D2432',
      border: '3px solid black',
      boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      cursor: 'pointer',
      margin: '1rem 0',
      zIndex: 1,
    },
    footerButtons: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      position: 'absolute',
      bottom: '1rem',
      zIndex: 1,
    },
    footerIcon: {
      width: '40px',
      height: '40px',
      background: '#2D2432',
      borderRadius: '50%',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.ellipse}></div>

      <img
        src="https://placehold.co/261x207"
        alt="Gino the Cat"
        style={styles.catImage}
      />

      <div style={styles.textGroup}>
        <div style={styles.name}>Gino</div>
        <div style={styles.detail}>(Male)</div>
        <div style={styles.age}>5 years old</div>
        <div style={styles.type}>Cat</div>
      </div>

      <div style={styles.button}>Edit Profile</div>

      <div
        style={styles.button}
        onClick={() => navigate('/RegisterServiceMenu')}
      >
        Request Service
      </div>

      <div style={styles.button}>History</div>

      <div style={styles.footerButtons}>
        <div style={styles.footerIcon}></div>
        <div style={styles.footerIcon}></div>
        <div style={styles.footerIcon}></div>
      </div>
    </div>
  );
};

export default PetMenu;