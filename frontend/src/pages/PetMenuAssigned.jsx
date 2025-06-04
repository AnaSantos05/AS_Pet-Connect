import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PetMenuAssigned = () => {
  const navigate = useNavigate();

  const baseFont = "'Londrina Solid', cursive, sans-serif";

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
      paddingBottom: '80px',
    },
    headerCurve: {
      position: 'absolute',
      top: '-110vw',
      left: '-45vw',
      width: '190vw',
      height: '190vw',
      background: '#2D2432',
      borderRadius: '50%',
      zIndex: 0,
    },
    backArrow: {
      position: 'fixed',
      top: '1.5rem',
      left: '1rem',
      fontSize: '2.4rem',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
    },
    petImage: {
      width: '45vw',
      maxWidth: '180px',
      height: 'auto',
      marginTop: '6rem',
      borderRadius: '20px',
      border: '3px solid white',
      zIndex: 2,
      objectFit: 'cover',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      userSelect: 'none',
    },
    textGroup: {
      textAlign: 'center',
      marginTop: '1rem',
      zIndex: 2,
    },
    name: {
      fontSize: '2.4rem',
      color: '#2D2432',
      fontWeight: '900',
      marginBottom: '0.25rem',
      userSelect: 'none',
    },
    genderGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      gap: '0.3rem',
      fontSize: '1.2rem',
      color: 'rgba(255, 0, 0, 0.7)',
      userSelect: 'none',
    },
    typeText: {
      color: 'rgba(72, 255, 0, 0.9)',
      fontWeight: 'bold',
    },
    genderText: {
      color: 'rgba(255, 176, 98, 0.9)',
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
      marginTop: '1.5rem',
      zIndex: 2,
      userSelect: 'none',
    },
    hotelLogo: {
      width: '36px',
      height: '36px',
      objectFit: 'contain',
      userSelect: 'none',
    },
    hotelName: {
      fontSize: '1.5rem',
      color: '#2D2432',
      fontWeight: '900',
    },
    optionsList: {
      marginTop: '2rem',
      width: '85%',
      maxWidth: '360px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 2,
    },
    optionButton: {
      width: '100%',
      padding: '0.9rem 1rem',
      background: '#2D2432',
      color: 'white',
      borderRadius: '30px',
      fontFamily: baseFont,
      fontWeight: '700',
      fontSize: '1.2rem',
      textAlign: 'center',
      cursor: 'pointer',
      boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
      userSelect: 'none',
      transition: 'background-color 0.3s ease',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: '#2D2432',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 20,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      userSelect: 'none',
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
      <div style={styles.headerCurve} />
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate(-1)}
        aria-label="Back"
      />

      <img
        src="./images/Roxy.jpg"
        alt="Pet"
        style={styles.petImage}
        draggable={false}
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
          src="./images/bichosolto-logo.png"
          alt="Hotel Logo"
          style={styles.hotelLogo}
          draggable={false}
        />
        <div style={styles.hotelName}>Hotel Bicho Solto</div>
      </div>

      <div style={styles.optionsList}>
        <button
          style={styles.optionButton}
          onClick={() => navigate('/ServiceRequests')}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          Services
        </button>

        <button
          style={styles.optionButton}
          onClick={() => navigate('/PetAssignedChat')}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          Chat
        </button>

        <button
          style={styles.optionButton}
          onClick={() => navigate('/PetAssignedPin')}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          PIN
        </button>
      </div>

      <div style={styles.footer}>
        <div
          style={styles.footerIcon}
          onClick={() => navigate('/OwnerHomeInterface')}
          aria-label="Home"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/OwnerHomeInterface') }}
        >
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>
        <div style={styles.footerIcon} aria-hidden="true">
          <img
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>
        <div
          style={styles.footerIcon}
          onClick={() => navigate('/OwnerSettings')}
          aria-label="Settings"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/OwnerSettings') }}
        >
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PetMenuAssigned;
