import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faArrowRight, faEllipsisVertical, faPaw, faMapMarkerAlt, faGear } from '@fortawesome/free-solid-svg-icons';

const images = [
  '/images/hotel1.png',
  '/images/hotel2.png',
  '/images/hotel3.png',
];

export const PetHotelDetails = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      color: 'white',
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
        borderBottomLeftRadius: '50% 80px', // More pronounced ellipse for 160px height
        borderBottomRightRadius: '50% 80px', // More pronounced ellipse for 160px height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      },
      
      logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        width: '100%',
        position: 'relative', // Added relative positioning
        zIndex: 1, // Added z-index to appear above header
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
      marginBottom: '20px',
      textAlign: 'center',
      color: '#2D2432',
    },

    carouselContainer: {
      width: '90%',
      maxWidth: '400px',
      backgroundColor: '#2c2247',
      borderRadius: '16px',
      padding: '20px',
      position: 'relative',
      userSelect: 'none',
    },

    carouselImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      display: 'block',
      marginBottom: '12px',
    },

    navArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      userSelect: 'none',
      padding: '5px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },

    leftArrow: {
      left: '10px',
    },

    rightArrow: {
      right: '10px',
    },

    description: {
      fontSize: '14px',
      lineHeight: '1.5',
      fontWeight: '600',
      color: 'white',
      marginBottom: '12px',
      minHeight: '72px',
    },

    continueButton: {
      width: '100%',
      backgroundColor: '#4a3f6b',
      borderRadius: '12px',
      padding: '10px 0',
      fontWeight: '700',
      fontSize: '16px',
      color: 'white',
      cursor: 'pointer',
      userSelect: 'none',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '6px',
      transition: 'background-color 0.3s',
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
      {/* Header */}
      <div style={styles.header}></div>

      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          style={styles.logoImage}
          src="/images/bichosolto-logo.png"
          alt="Bichosolto Logo"
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
      </div>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <img
          src={images[currentImage]}
          alt={`Hotel view ${currentImage + 1}`}
          style={styles.carouselImage}
          draggable={false}
        />
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ ...styles.navArrow, ...styles.leftArrow }}
          onClick={prevImage}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ ...styles.navArrow, ...styles.rightArrow }}
          onClick={nextImage}
        />
        <div style={styles.description}>
          O Pet Hotel Bicho Solto oferece uma gama completa de serviços para garantir o conforto, bem-estar e diversão do seu animal de estimação.
        </div>
        <button
          style={styles.continueButton}
          onClick={() => navigate('/continue')}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#684e9a'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#4a3f6b'}
        >
          Continue <FontAwesomeIcon icon={faArrowRight} />
        </button>
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

export default PetHotelDetails;