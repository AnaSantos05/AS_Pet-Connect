import React from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerFinal = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      fontFamily: "'Lexend Peta', sans-serif",
      backgroundColor: '#fff',
      minHeight: '100vh',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },
    header: {
      backgroundColor: '#2D2432',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      borderBottomLeftRadius: '60px',
      borderBottomRightRadius: '60px',
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.3rem',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginTop: '-50px',
      border: '3px solid white',
    },
    card: {
      marginTop: '1rem',
      backgroundColor: '#fff',
      width: '90%',
      maxWidth: '360px',
      textAlign: 'center',
    },
    info: {
      fontSize: '1rem',
      margin: '0.4rem 0',
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
    },
    editButton: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    },
    total: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginTop: '1.5rem',
    },
    paymentLabel: {
      marginTop: '0.8rem',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
    methods: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    methodIcon: {
      height: '32px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.name}>João Ferreira</div>
        <img src="/images/joao.jpg" alt="João Ferreira" style={styles.image} />
      </div>

      <div style={styles.card}>
        <div style={styles.info}>⭐☆☆☆☆ <span>(1)</span></div>
        <div style={styles.info}>Rua Santa Maria da Feira, 19, AVEIRO</div>
        <div style={styles.info}>Accomodation for <strong>Gino</strong></div>
        <div style={styles.info}>from <strong>10/10/2025</strong> till <strong>15/12/2025</strong></div>

        <button
          style={styles.editButton}
          onClick={() => navigate('/PetRequestService/Gino')}
        >
          Edit ✏️
        </button>

        <div style={styles.total}>Total: 15€</div>
        <div style={styles.paymentLabel}>Select one:</div>

        <div style={styles.methods}>
          <img src="/images/visa.png" alt="Visa" style={styles.methodIcon} />
          <img src="/images/applepay.png" alt="Apple Pay" style={styles.methodIcon} />
          <img src="/images/mbway.png" alt="MB WAY" style={styles.methodIcon} />
        </div>
      </div>
    </div>
  );
};

export default OwnerFinal;
