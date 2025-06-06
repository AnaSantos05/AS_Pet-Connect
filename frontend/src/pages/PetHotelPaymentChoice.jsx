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

const PetPhotoURL = '/images/Roxy.jpg';

export const PaymentProcedure = () => {
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

    header: {
      width: '100%',
      height: '160px',
      backgroundColor: '#2D2432',
      borderBottomLeftRadius: '50% 80px',
      borderBottomRightRadius: '50% 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
    },

    backButton: {
      position: 'absolute',
      left: 15,
      top: 20,
      fontSize: 28,
      color: 'white',
      cursor: 'pointer',
      userSelect: 'none',
      zIndex: 10,
    },

    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      width: '100%',
      position: 'relative',
      zIndex: 1,
    },

    logoImage: {
      width: '160px',
      userSelect: 'none',
      marginBottom: '10px',
    },

    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '8px',
    },

    ratingText: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#2D2432',
    },

    star: {
      color: '#FFB400',
    },

    address: {
      fontWeight: '700',
      fontSize: '18px',
      marginBottom: '15px',
      textAlign: 'center',
      color: '#2D2432',
      lineHeight: 1.3,
    },

    accommodationContainer: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: '16px',
      color: '#2D2432',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      userSelect: 'none',
    },

    petName: {
      fontWeight: 'bold',
    },

    petPhoto: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #2D2432',
    },

    dateText: {
      marginTop: 8,
      fontSize: '15px',
      color: '#2D2432',
      fontWeight: '600',
      userSelect: 'none',
    },

    editButton: {
      marginTop: 20,
      backgroundColor: '#2D2432',
      color: 'white',
      borderRadius: '30px',
      padding: '10px 40px',
      fontSize: '18px',
      fontWeight: '700',
      fontFamily: "'Londrina Solid', cursive, sans-serif",
      cursor: 'pointer',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      userSelect: 'none',
      transition: 'background-color 0.3s',
    },

    totalText: {
      marginTop: 25,
      fontSize: '22px',
      fontWeight: '700',
      color: '#2D2432',
      userSelect: 'none',
    },

    selectOneText: {
      marginTop: 5,
      fontSize: '15px',
      color: '#2D2432',
      fontWeight: '600',
      userSelect: 'none',
    },

    paymentMethodsContainer: {
      marginTop: 15,
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      width: '100%',
      maxWidth: '360px',
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
      userSelect: 'none',
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
      {/* Header curved */}
      <div style={styles.header}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={styles.backButton}
          onClick={() => navigate(-1)}
          title="Go back"
        />
      </div>

      {/* Logo Container */}
      <div style={styles.logoContainer}>
        <img
          src="/images/bichosolto-logo.png"
          alt="Bichosolto Logo"
          style={styles.logoImage}
          draggable={false}
        />

        {/* Rating */}
        <div style={styles.ratingContainer}>
          <span style={styles.ratingText}>3.5</span>
          {[1, 2, 3, 4, 5].map((i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              style={{
                ...styles.star,
                color: i <= 3 ? '#FFB400' : '#555555',
              }}
            />
          ))}
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#2D2432', cursor: 'pointer' }} />
        </div>

        {/* Address */}
        <div style={styles.address}>
          Rua das Camélias, 55, <br /> AVEIRO
        </div>

        {/* Accommodation */}
        <div style={styles.accommodationContainer}>
          <span>Accommodation for</span>
          <span style={styles.petName}>Roxy</span>
          <img
            src={PetPhotoURL}
            alt="Roxy"
            style={styles.petPhoto}
            draggable={false}
          />
        </div>

        <div style={styles.dateText}>
          from 10/10/2025 till 15/12/2025
        </div>

        {/* Edit Button */}
        <button
          style={{
            ...styles.editButton,
            backgroundColor: editHover ? '#443769' : '#2D2432',
          }}
          onMouseEnter={() => setEditHover(true)}
          onMouseLeave={() => setEditHover(false)}
          onClick={() => navigate('/edit')}
        >
          Edit <FontAwesomeIcon icon={faPen} />
        </button>

        {/* Total and payment options */}
        <div style={styles.totalText}>Total: 15€</div>
        <div style={styles.selectOneText}>Select one:</div>

        <div style={styles.paymentMethodsContainer}>
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              style={styles.paymentMethod}
              onClick={() => navigate('/PaymentSuccessful')}
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
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map-on.svg"
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

export default PaymentProcedure;