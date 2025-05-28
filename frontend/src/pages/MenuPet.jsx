import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuPet = () => {
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
    ilustracao: {
      width: '100%',
      maxWidth: '500px',
      marginTop: '5vh',
      zIndex: 1,
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
    iconsContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      position: 'absolute',
      top: '1rem',
      zIndex: 2,
    },
    backIcon: {
      width: '30px',
      height: '30px',
      background: 'white',
      borderRadius: '50%',
      boxShadow: '0 0 3px rgba(0,0,0,0.2)',
    },
    flagIcon: {
      width: '43px',
      height: '43px',
      position: 'relative',
    },
    flagLayer: (size, top, left, color, opacity = 1) => ({
      position: 'absolute',
      width: size,
      height: size,
      top,
      left,
      background: color,
      borderRadius: '50%',
      opacity,
    }),
    footer: {
      marginTop: 'auto',
      padding: '1rem',
      fontSize: '0.8rem',
      color: 'black',
      zIndex: 1,
    },
  };

  return (
    <div style={styles.page}>
      {/* Ellipse background */}
      <div style={styles.ellipse}></div>

      {/* Top Icons */}
      <div style={styles.iconsContainer}>
        <div style={styles.backIcon}></div>
        <div style={styles.flagIcon}>
          <div style={styles.flagLayer('43px', '0px', '0px', '#380D51')}></div>
          <div style={styles.flagLayer('39.73px', '1.64px', '1.64px', 'white')}></div>
          <div style={styles.flagLayer('36.35px', '3.33px', '3.33px', '#FEFEFE')}></div>
          <div style={styles.flagLayer('29.35px', '4.36px', '6.82px', '#012169')}></div>
          <div style={styles.flagLayer('36.35px', '3.33px', '3.33px', '#C8102E', 0.3)}></div>
        </div>
      </div>

      {/* Ilustração */}
      <img
        src="https://placehold.co/628x471"
        alt="Ilustração"
        style={styles.ilustracao}
      />

      {/* LOGIN Button */}
      <div
        style={styles.button}
        onClick={() => navigate('/login')}
      >
        LOGIN
      </div>

      {/* REGISTER Button */}
      <div
        style={styles.button}
        onClick={() => navigate('/register')}
      >
        REGISTER
      </div>

      {/* Footer */}
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};

export default MenuPet;