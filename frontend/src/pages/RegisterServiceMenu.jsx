import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '@fontsource/londrina-solid'; // npm package for the font
export const RegisterServiceMenu = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const baseFont = "'Lexend Peta', sans-serif"; // Define the base font

  const styles = {
    container: {
      height: '100dvh',
      width: '100vw',
      background: 'white',
      fontFamily: baseFont,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
       justifyContent: 'space-between',
       justifyContent: 'flex-start',
      padding: '1rem',
       paddingBottom: '100px', // espaço para o footer
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
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
    backArrow: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 2,
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer',
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
      fontFamily: 'Londrina Solid',
       marginTop: '0.5rem',
       marginTop: '1.5rem', // sobe os textos
      zIndex: 1,
    },
    name: {
      fontSize: 'clamp(1.5rem, 2vw, 1.8rem)',
      color: '#2D2432',
      fontWeight: 'bold',
    },
    genderGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.3rem',
      fontSize: '1.1rem',
    },
    typeText: {
      color: '#380D51',
      fontWeight: 'bold',
    },
    genderText: {
      color: '#FFB062',
      fontWeight: 'bold',
    },
    age: {
      fontSize: '1rem',
      color: '#9E8DAD',
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
       marginTop: '1rem', // mais espaço acima
      fontFamily: 'Londrina Solid',
      color: '#2D2432',
      zIndex: 1,
    },
    formGroup: {
      width: '90%',
      maxWidth: '320px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
       marginTop: '1rem', // sobe o form
      zIndex: 1,
    },
    inputRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'space-between',
    },
    label: {
      minWidth: '60px',
      fontWeight: 'bold',
      color: '#2D2432',
    },
    input: {
      flex: 1,
      height: '2.2rem',
      background: '#C2C2C2',
      border: '1px solid black',
      padding: '0.4rem',
      fontSize: '1rem',
      fontFamily: baseFont,
      color: '#525252',
      borderRadius: '8px',
    },
    textarea: {
      width: '100%',
      height: '4.5rem',
      background: '#C2C2C2',
      border: '1px solid black',
      padding: '0.5rem',
      fontSize: '1rem',
      fontFamily: baseFont,
      color: '#525252',
      borderRadius: '8px',
    },
    icon: {
      fontSize: '1.5rem',
      color: '#380D51',
    },
    submitButton: {
      width: '44px',
      height: '44px',
      background: '#380D51',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.5rem',
      alignSelf: 'flex-end',
      cursor: 'pointer',
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
  };

  return (
    <div style={styles.container}>
      {/* círculo roxo de fundo */}
      <div style={styles.ellipse} />

      {/* Back arrow */}
      <div
        style={styles.backArrow}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        ← {/* Back arrow content */}
      </div>
    
      {/* foto do pet */}
      <img
        src="./images/CatImage.png"
        alt="Gino the Cat"
        style={styles.catImage}
      />

      {/* texto com nome, tipo e idade */}
      <div style={styles.textGroup}>
        <div style={styles.name}>Gino</div>
        <div style={styles.genderGroup}>
          <span style={styles.typeText}>Cat</span>
          <span style={styles.genderText}>(Male)</span>
        </div>
        <div style={styles.age}>5 years old</div>
      </div>

      {/* título da seção */}
      <div style={styles.sectionTitle}>REQUEST SERVICES</div>

      {/* formulário */}
      <div style={styles.formGroup}>
        <div style={styles.inputRow}>
          <label style={styles.label}>Type:</label>
          <input style={styles.input} placeholder="Select a type" />
        </div>
        <div style={styles.inputRow}>
          <label style={styles.label}>Date:</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
            <input style={styles.input} placeholder="DD/MM/YYYY" />
            <span style={styles.icon}>🗓️</span>
          </div>
        </div>
        <div style={styles.inputRow}>
          <label style={styles.label}>Hour:</label>
          <input style={styles.input} placeholder="HH:MM" />
        </div>
        <div>
          <label style={styles.label}>Notes:</label>
          <textarea
            style={styles.textarea}
            placeholder="Put here medication, prescription, notes about the treatment or the pet"
          />
        </div>

        {/* botão enviar */}
        <div style={styles.submitButton}>✔</div>
      </div>

      {/* footer com ícones */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img src="./images/home-on.svg" alt="Ícone 1" style={styles.footerIconImage} onClick={() => navigate('/OwnerHomeInterface')}/>
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/map.svg" alt="Ícone 2" style={styles.footerIconImage} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/settings.svg" alt="Ícone 3" style={styles.footerIconImage} onClick={() => navigate('/OwnerSettings')}/>
        </div>
      </div>
    </div>
  );
};

export default RegisterServiceMenu;