import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OwnerSettings = () => {
  const baseFont = 'Lexend Peta, sans-serif';
  const navigate = useNavigate();

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

  const options = ['Profile', 'History', 'Language', 'Notifications', 'About Us'];

  return (
    <div style={styles.container}>
      <div style={styles.topEllipse} />

      {/* Back arrow */}
      <div
        style={styles.backArrow}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        ← {/* Back arrow content */}
      </div>

      <button style={styles.logoutButton } onClick={() => navigate('/')}>LogOut</button>

      {/* Profile Picture */}
      <div style={styles.profileWrapper}>
        <div style={styles.profileBorder}>
          <img
            src="./images/OwnerPfp.png"
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

      {/* footer com ícones */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img src="./images/home.svg" alt="Ícone 1" style={styles.footerIconImage} onClick={() => navigate('/OwnerHomeInterface')} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/map.svg" alt="Ícone 2" style={styles.footerIconImage} onClick={() => navigate('/OwnerMap')} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/settings-on.svg" alt="Ícone 3" style={styles.footerIconImage} onClick={() => navigate('/OwnerSettings')} />
        </div>
      </div>
    </div>
  );
};

export default OwnerSettings;
