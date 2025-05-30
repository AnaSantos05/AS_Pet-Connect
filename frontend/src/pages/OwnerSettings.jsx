import React from 'react';

export const OwnerSettings = () => {
  const baseFont = 'Lexend Peta, sans-serif';

  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100dvh',
      background: 'white',
      fontFamily: baseFont,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '0',
      boxSizing: 'border-box',
      overflowX: 'hidden',
    },
    topEllipse: {
      position: 'absolute',
      top: '-120vw',            // desloca mais para cima
      left: '-50vw',
      width: '200vw',
      height: '200vw',
      background: 'linear-gradient(180deg, #2D2432 0%, #2D2432 100%)',
      borderRadius: '50%',
      zIndex: 0,
    },
    logoutButton: {
      position: 'absolute',
      top: '2rem',
      right: '1.5rem',
      padding: '0.5rem 1rem',
      background: '#FF6B6B',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      fontFamily: baseFont,
      fontWeight: 'bold',
      cursor: 'pointer',
      zIndex: 2,
    },
    profileWrapper: {
      position: 'relative',
      marginTop: '6rem',       // reduz espaço para subir foto
      zIndex: 1,
    },
    profileBorder: {
      width: '140px',          // torna borda maior
      height: '140px',
      borderRadius: '50%',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: '120px',          // imagem maior
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      background: '#2D2432',
    },
    optionsList: {
      marginTop: '8rem',       // desce lista de botões
      width: '90%',
      maxWidth: '380px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',           // espaçamento maior
      zIndex: 1,
    },
    optionButton: {
      width: '100%',
      padding: '1rem 1.5rem',  // botões maiores
      background: '#2D2432',
      color: 'white',
      border: '1px solid #000',
      borderRadius: '30px',
      fontFamily: baseFont,
      fontSize: '1.2rem',      // texto um pouco maior
      letterSpacing: '0.5px',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
    },
    optionShadow: {
      content: "''",
      position: 'absolute',
      bottom: '-6px',         // sombra mais evidenciada
      left: '6px',
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

  const options = ['Profile', 'History', 'Language', 'Notifications', 'About Us'];

  return (
    <div style={styles.container}>
      <div style={styles.topEllipse} />
      <button style={styles.logoutButton}>LogOut</button>

      {/* Profile Picture */}
      <div style={styles.profileWrapper}>
        <div style={styles.profileBorder}>
          <img
            src="https://placehold.co/120"
            alt="Owner"
            style={styles.profileImage}
          />
        </div>
      </div>

      {/* Options List */}
      <div style={styles.optionsList}>
        {options.map((opt) => (
          <div key={opt} style={styles.optionButton}>
            {opt}
            <div style={styles.optionShadow} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>🐾</div>
        <div style={styles.footerIcon}>📍</div>
        <div style={styles.footerIcon}>⚙️</div>
      </div>
    </div>
  );
};

export default OwnerSettings;
