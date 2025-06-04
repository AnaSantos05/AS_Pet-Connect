import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPen, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const paymentMethods = [
  {
    name: 'Visa',
    logo: '/images/visa.png',
  },
  {
    name: 'Apple Pay',
    logo: '/images/applepay.png',
  },
  {
    name: 'MB WAY',
    logo: '/images/mbway.png',
  },
];

const PetPhotoURL = '/images/joao_ferreira.jpg';

const OwnerFinal = () => {
  const navigate = useNavigate();
  const [editHover, setEditHover] = useState(false);

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: "'Londrina Solid', cursive, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px',
      position: 'relative',
      overflowX: 'hidden',
    },
    // dentro do objeto styles:

    // Ajuste no styles:

    header: {
      width: '100%',
      height: '200px', // aumentando mais o header para dar espaço
      backgroundColor: '#2D2432',
      borderBottomLeftRadius: '50% 100px',
      borderBottomRightRadius: '50% 100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      userSelect: 'none',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      color: 'white',
    },

    logoImage: {
      width: '160px',
      userSelect: 'none',
      marginTop: '40px', // diminuindo margem negativa da foto para evitar corte
      borderRadius: '80px',
      border: '3px solid white',
      objectFit: 'cover',
      boxShadow: '0 0 8px rgba(0,0,0,0.4)',
    },

    backButton: {
      position: 'absolute',
      left: 20,
      top: 20,
      fontSize: 28,
      color: 'white',
      cursor: 'pointer',
      userSelect: 'none',
      zIndex: 10,
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.6rem',
      marginTop: '60px',
      color: 'black',
    },
    card: {
      backgroundColor: 'white',
      width: '90%',
      maxWidth: '360px',
      textAlign: 'center',
      borderRadius: '24px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      padding: '1.5rem',
      marginTop: '100px',
      userSelect: 'none',
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      marginBottom: '1rem',
    },
    ratingText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2D2432',
    },
    star: {
      color: '#FFB400',
      fontSize: '1.3rem',
    },
    address: {
      fontSize: '1rem',
      color: '#2D2432',
      marginBottom: '0.8rem',
      fontWeight: '500',
    },
    accommodationText: {
      fontWeight: '600',
      fontSize: '1rem',
      marginBottom: '0.3rem',
      color: '#2D2432',
    },
    datesText: {
      fontWeight: '600',
      fontSize: '1rem',
      marginBottom: '1rem',
      color: '#2D2432',
    },
    editButton: {
      margin: '0 auto 1.5rem auto',
      padding: '10px 36px',
      backgroundColor: editHover ? '#4a3f6b' : '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '32px',
      fontWeight: '700',
      fontSize: '1.1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      userSelect: 'none',
      transition: 'background-color 0.3s',
    },
    totalText: {
      fontWeight: '700',
      fontSize: '1.4rem',
      color: '#2D2432',
      marginBottom: '0.4rem',
      userSelect: 'none',
    },
    selectLabel: {
      fontWeight: '600',
      fontSize: '1rem',
      marginBottom: '0.8rem',
      userSelect: 'none',
    },
    paymentMethodsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      maxWidth: '360px',
      margin: '0 auto',
      userSelect: 'none',
    },
    paymentMethod: {
      cursor: 'pointer',
      flex: '1 1 0',
      height: '60px',
      borderRadius: '12px',
      border: '1.5px solid #2D2432',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      transition: 'transform 0.2s ease',
    },
    paymentMethodImage: {
      maxHeight: '90%',
      maxWidth: '100%',
      objectFit: 'contain',
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
      zIndex: 10,
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
      {/* Header */}
      <div style={styles.header}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={styles.backButton}
          onClick={() => navigate(-1)}
          title="Go back"
        />
        <img
          src={PetPhotoURL}
          alt="João Ferreira"
          style={styles.logoImage}
          draggable={false}
        />
        <div style={styles.name}>João Ferreira</div>
      </div>

      {/* Card with details */}
      <div style={styles.card}>
        <div style={styles.ratingContainer}>
          <span style={styles.ratingText}>1</span>
          {[1, 2, 3, 4, 5].map((i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              style={{
                ...styles.star,
                color: i === 1 ? '#FFB400' : '#555555',
              }}
            />
          ))}
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#2D2432', cursor: 'pointer' }} />
        </div>

        <div style={styles.address}>Rua Santa Maria da Feira, 19, AVEIRO</div>

        <div style={styles.accommodationText}>
          Accommodation for <strong>Gino</strong>
        </div>

        <div style={styles.datesText}>
          from <strong>10/10/2025</strong> till <strong>15/12/2025</strong>
        </div>

        <button
          style={styles.editButton}
          onMouseEnter={() => setEditHover(true)}
          onMouseLeave={() => setEditHover(false)}
          onClick={() => navigate('/PetRequestService/Gino')}
        >
          Edit <FontAwesomeIcon icon={faPen} />
        </button>

        <div style={styles.totalText}>Total: 15€</div>

        <div style={styles.selectLabel}>Select one:</div>

        <div style={styles.paymentMethodsContainer}>
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              style={styles.paymentMethod}
              onClick={() => navigate('/PaymentSuccessfulPetTaker')}
              title={`Pay with ${method.name}`}
            >
              <img
                src={method.logo}
                alt={method.name}
                style={styles.paymentMethodImage}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetTakerHome')}
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

export default OwnerFinal;
