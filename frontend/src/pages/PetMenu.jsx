import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/londrina-solid'; // npm package for the font
import styled from 'styled-components';

export const PetMenu = () => {
  const navigate = useNavigate();

  const TextGroup = styled.div`
  text-align: center;
  color: #2D2432;
  font-family: 'Londrina Solid', sans-serif;
  margin-top: 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column; /* Layout padrão: vertical */
  align-items: center;
  gap: 0.5rem; /* Espaçamento entre os elementos */

  @media (max-height: 833px) {
    flex-direction: row; /* Altera para layout horizontal */
    flex-wrap: wrap; /* Permite quebra de linha se necessário */
    justify-content: center;
    gap: 1rem; /* Ajusta o espaçamento entre os elementos */
  }
`;


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
      width: '110%',
      height: '75%',
      top: '-45%',
      left: '-5%',
      position: 'absolute',
      overflow: 'hidden', // Makes it so the gradient circle doesn't leak out of the container
      alignItems: 'center',
      justifyContent: 'center',
      background: '#2D2432',
      borderRadius: '50%',
      border: '20px #2D2432 solid',
    },
    catImage: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      marginTop: 'clamp(2vh, 5vh, 10vh)', // Dynamically adjusts margin based on screen size
      borderRadius: '50px',
      border: '3px solid rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    textGroup: {
      textAlign: 'center',
      color: '#2D2432',
      fontFamily: 'Londrina Solid',
      marginTop: '1rem',
      zIndex: 1,
      display: 'flex', // Ativa o flexbox
      flexDirection: 'column', // Layout padrão: vertical
      alignItems: 'center',
      gap: '0.5rem', // Espaçamento entre os elementos
      '@media only screen and (min-width: 200px) and (max-width: 767px)': {
        flexDirection: 'row', // Altera para layout horizontal
        flexWrap: 'wrap', // Permite quebra de linha se necessário
        justifyContent: 'center',
        gap: '1rem', // Ajusta o espaçamento entre os elementos
      },
    },
    name: {
      fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', // Dynamically adjusts font size
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
    },
    detail: {
      fontSize: 'clamp(1rem, 2vw, 2rem)', // Dynamically adjusts font size
      color: '#FECD63',
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
    },
    age: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)', // Dynamically adjusts font size
      color: '#78588A',
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
    },
    type: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)', // Dynamically adjusts font size
      color: '#380D51',
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
    },
    button: {
      width: '80%',
      maxWidth: '300px',
      height: 'clamp(50px, 8vh, 60px)', // Dynamically adjusts height
      background: '#2D2432',
      border: '3px solid black',
      boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', // Dynamically adjusts font size
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      cursor: 'pointer',
      margin: '1rem 0', // Ensures consistent spacing between buttons
      zIndex: 1,
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
      cursor: 'pointer',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
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
  };

  return (
    <div style={styles.page}>
      <div style={styles.ellipse}></div>

      {/* Back arrow */}
      <div
        style={styles.backArrow}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        ← {/* Back arrow content */}
      </div>

      <img
        src="./images/CatImage.png"
        alt="Gino the Cat"
        style={styles.catImage}
      />

      <TextGroup>
        <div style={styles.name}>Gino</div>
        <div style={styles.detail}>(Male)</div>
        <div style={styles.age}>5 years old</div>
        <div style={styles.type}>Cat</div>
      </TextGroup>

      <div style={styles.button}>Edit Profile</div>

      <div
        style={styles.button}
        onClick={() => navigate('/RegisterServiceMenu')}
      >
        Request Service
      </div>

      <div style={styles.button}>History</div>

      {/* footer com ícones */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img src="./images/home-on.svg" alt="Ícone 1" style={styles.footerIconImage} onClick={() => navigate('/OwnerHomeInterface')} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/map.svg" alt="Ícone 2" style={styles.footerIconImage} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/settings.svg" alt="Ícone 3" style={styles.footerIconImage} onClick={() => navigate('/OwnerSettings')} />
        </div>
      </div>
    </div>
  );
};

export default PetMenu;