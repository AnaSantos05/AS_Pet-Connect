import React from 'react';

export const PetMenuAssigned = () => {
  const baseFont = 'Lexend Peta, sans-serif';

  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100dvh',
      background: 'white',
      fontFamily: baseFont,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '60px', // espaço para footer
    },
    topEllipse: {
      position: 'absolute',
      top: '-100vw',
      left: '-40vw',
      width: '180vw',
      height: '180vw',
      background: '#2D2432',
      borderRadius: '50%',
      zIndex: 0,
    },
    backArrow: {
      position: 'absolute',
      top: '1.5rem',
      left: '1rem',
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer',
      zIndex: 2,
    },
    petImage: {
      width: '70vw',
      maxWidth: '261px',
      height: 'auto',
      marginTop: '6rem',
      borderRadius: '30px',
      border: '3px solid black',
      zIndex: 1,
      objectFit: 'cover',
      background: '#ccc',
    },
    textGroup: {
      textAlign: 'center',
      marginTop: '1rem',
      zIndex: 1,
    },
    name: {
      fontSize: '2rem',
      color: '#2D2432',
      fontWeight: 'bold',
      marginBottom: '0.25rem',
    },
    genderGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      gap: '0.25rem',
      fontSize: '1rem',
      color: '#9E8DAD',
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
      marginLeft: '0.5rem',
      color: '#9E8DAD',
    },
    hotelSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      zIndex: 1,
    },
    hotelLogo: {
      width: '30px',
      height: '30px',
      objectFit: 'contain',
    },
    hotelName: {
      fontSize: '1.25rem',
      color: '#2D2432',
      fontWeight: 'bold',
    },
    optionsList: {
      marginTop: '2rem',
      width: '85%',
      maxWidth: '360px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 1,
    },
    optionButton: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: '#2D2432',
      color: 'white',
      border: '1px solid #000',
      borderRadius: '30px',
      fontFamily: baseFont,
      fontSize: '1rem',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
    },
    optionShadow: {
      content: "''",
      position: 'absolute',
      bottom: '-4px',
      left: '4px',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.2)',
      borderRadius: '30px',
      zIndex: -1,
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
      width: '36px',
      height: '36px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  };

  const options = ['Services', 'Chat', 'PIN'];

  return (
    <div style={styles.container}>
      <div style={styles.topEllipse} />
      <div style={styles.backArrow}>←</div>

      <img
        src="https://placehold.co/261x207"
        alt="Pet"
        style={styles.petImage}
      />

      <div style={styles.textGroup}>
        <div style={styles.name}>Roxy</div>
        <div style={styles.genderGroup}>
          <span style={styles.typeText}>Dog</span>
          <span style={styles.genderText}>(Female)</span>
          <span style={styles.age}>5 years old</span>
        </div>
      </div>

      <div style={styles.hotelSection}>
        <img
          src="https://placehold.co/30"
          alt="Hotel Logo"
          style={styles.hotelLogo}
        />
        <div style={styles.hotelName}>Hotel Bicho Solto</div>
      </div>

      <div style={styles.optionsList}>
        {options.map(opt => (
          <div key={opt} style={styles.optionButton}>
            {opt}
            <div style={styles.optionShadow} />
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>🐾</div>
        <div style={styles.footerIcon}>📍</div>
        <div style={styles.footerIcon}>⚙️</div>
      </div>
    </div>
  );
};

export default PetMenuAssigned;
