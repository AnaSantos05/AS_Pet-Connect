import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetTakerProfile = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      fontFamily: "'Londrina Solid', cursive, sans-serif",
      backgroundColor: 'white',
      minHeight: '100vh',
      paddingTop: '120px', // espaço para header curvo
      paddingBottom: '80px', // espaço para footer fixo
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      userSelect: 'none',
    },
    header: {
      width: '100%',
      height: '160px',
      backgroundColor: '#2D2432',
      borderBottomLeftRadius: '50% 80px',
      borderBottomRightRadius: '50% 80px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      position: 'fixed',
      top: '20px',
      left: '15px',
      fontSize: '28px',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
    },
    logoImage: {
      width: '160px',
      userSelect: 'none',
    },
    photo: {
      width: '180px',
      height: '180px',
      borderRadius: '60px',
      objectFit: 'cover',
      border: '4px solid white',
      marginTop: '-60px',
      zIndex: 10,
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.6rem',
      marginTop: '12px',
      color: '#2D2432',
      textAlign: 'center',
    },
    rating: {
      marginTop: '8px',
      fontSize: '18px',
      color: '#FFB400',
      textAlign: 'center',
    },
    address: {
      marginTop: '4px',
      fontSize: '14px',
      color: '#2D2432',
      textAlign: 'center',
    },
    gender: {
      marginTop: '4px',
      fontSize: '14px',
      color: '#78588A',
      textAlign: 'center',
    },
    age: {
      marginTop: '4px',
      fontSize: '16px',
      fontWeight: '700',
      color: '#FFB062',
      textAlign: 'center',
      marginBottom: '20px',
    },
    card: {
      backgroundColor: '#4B3B6B',
      color: 'white',
      borderRadius: '12px',
      padding: '1rem',
      marginBottom: '1rem',
      width: '90%',
      maxWidth: '360px',
      textAlign: 'left',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    label: {
      fontWeight: 'bold',
      color: '#FECD63',
      marginBottom: '6px',
    },
    sampleImage: {
      width: '100%',
      borderRadius: '12px',
      marginTop: '0.5rem',
      userSelect: 'none',
    },
    checkButton: {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      backgroundColor: '#2D2432',
      color: 'white',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      zIndex: 20,
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
      zIndex: 15,
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
      userSelect: 'none',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header with curved background and logo */}
      <div style={styles.header}>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={styles.backButton}
        aria-label="Back"
      >
        ←
      </button>

      {/* Profile Photo */}
      <img
        src="/images/joao_ferreira.jpg"
        alt="João Ferreira"
        style={styles.photo}
        draggable={false}
      />

      {/* Name and Info */}
      <div style={styles.name}>João Ferreira</div>

      <div style={styles.rating}>⭐☆☆☆☆ (1)</div>

      <div style={styles.address}>Rua Santa Maria da Feira, 19, AVEIRO</div>

      <div style={styles.gender}>Male</div>

      <div style={styles.age}>36 years old</div>

      {/* Description Card */}
      <div style={styles.card}>
        <div style={styles.label}>Description:</div>
        <div>
          I do pet–sitting and pet training for dogs and cats.
        </div>
      </div>

      {/* Competences Card */}
      <div style={styles.card}>
        <div style={styles.label}>Competences:</div>
        <div>
          As a Doctor of Veterinary Medicine trained in a reputable medical school, I bring extensive expertise in animal health and care, including emergency procedures and CPR. I also provide immediate first aid for unexpected injuries or illnesses.
        </div>
      </div>

      {/* Pictures Card */}
      <div style={styles.card}>
        <div style={styles.label}>Pictures of work</div>
        <img
          src="/images/sample-pet.png"
          alt="Work sample"
          style={styles.sampleImage}
          draggable={false}
        />
      </div>

      {/* Checkmark confirm button */}
      <div
        style={styles.checkButton}
        onClick={() => navigate('/OwnerFinal')}
        title="Confirmar e continuar"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if(e.key === 'Enter') navigate('/OwnerFinal') }}
      >
        ✓
      </div>

      {/* Footer */}
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
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
            draggable={false}
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

export default PetTakerProfile;
