import React from 'react';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      background: '#111111',
      color: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 1rem 1rem 1rem',
      boxSizing: 'border-box',
    },
    title: {
      fontSize: '1.5rem',
      marginTop: '1rem',
    },
    status: {
      fontSize: '1rem',
      color: '#aaaaaa',
    },
    emoji: {
      fontSize: '2rem',
      marginTop: '2rem',
    },
    callButtons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '1.2rem',
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    button: {
      width: '60px',
      height: '60px',
      borderRadius: '30px',
      backgroundColor: '#506680',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.7rem',
      textAlign: 'center',
    },
    redButton: {
      width: '70px',
      height: '70px',
      borderRadius: '35px',
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    redPhoneIcon: {
      width: '32px',
      height: '32px',
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
    <div style={styles.container}>
      <div style={{ textAlign: 'center' }}>
        <div style={styles.emoji}>🏨</div>
        <div style={styles.title}>Hotel Bicho Solto</div>
        <div style={styles.status}>Calling...</div>
      </div>

      <div style={styles.callButtons}>
        <div style={styles.button}>mute</div>
        <div style={styles.button}>keypad</div>
        <div style={styles.button}>speaker</div>
        <div style={styles.button}>add call</div>
        <div style={styles.button}>faceTime</div>
        <div style={styles.button}>contacts</div>
      </div>

      <div style={styles.redButton} onClick={() => navigate(-1)}>
        <img
          src="/images/phone-off.png"
          alt="End call"
          style={styles.redPhoneIcon}
        />
      </div>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map.svg"
            alt="Map"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerMap')}
          />
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

export default Phone;

