import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faArrowRight, faEllipsisVertical, faPaw, faMapMarkerAlt, faGear } from '@fortawesome/free-solid-svg-icons';

const images = [
  '/images/hotel1.jpg',
  '/images/hotel2.jpg',
  '/images/hotel3.jpg',
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
      backgroundColor: '#1f192a',
      color: 'white',
      fontFamily: "'Londrina Solid', cursive, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px', // space for footer
      position: 'relative',
      overflowX: 'hidden',
    },

    logoContainer: {
      position: 'relative',
      marginTop: '-70px',
      marginBottom: '10px',
    },

    logoImage: {
      width: '160px',
      userSelect: 'none',
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
      color: 'white',
    },

    star: {
      color: '#FFB400',
    },

    address: {
      fontWeight: '700',
      fontSize: '18px',
      marginBottom: '10px',
      textAlign: 'center',
    },

    carouselContainer: {
      width: '90%',
      maxWidth: '400px',
      backgroundColor: '#2c2247',
      borderRadius: '16px',
      padding: '10px',
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

    continueButtonHover: {
      backgroundColor: '#684e9a',
    },

    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#2c2247',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 100,
    },

    footerIcon: {
      color: 'white',
      fontSize: '28px',
      cursor: 'pointer',
      userSelect: 'none',
    },
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          style={styles.logoImage}
          src="/images/bichosolto-logo.png"
          alt="Bichosolto Logo"
          draggable={false}
        />
      </div>

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
        <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: 'white', cursor: 'pointer' }} />
      </div>

      {/* Address */}
      <div style={styles.address}>
        Rua das Camélias, 55, <br /> AVEIRO
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
        <FontAwesomeIcon
          icon={faPaw}
          style={styles.footerIcon}
          onClick={() => navigate('/ownerhome')}
          title="Pets"
        />
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={styles.footerIcon}
          onClick={() => navigate('/map')}
          title="Map"
        />
        <FontAwesomeIcon
          icon={faGear}
          style={styles.footerIcon}
          onClick={() => navigate('/settings')}
          title="Settings"
        />
      </div>
    </div>
  );
};

export default PetHotelDetails;
