import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  const assignHotelToPet = async (petId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pets/${petId}/assign-caretaker`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caretaker_id: 999 }),
      });

      if (response.ok) {
        console.log('Hotel assigned successfully after payment');
        return true;
      } else {
        console.error('Error assigning hotel');
        return false;
      }
    } catch (error) {
      console.error('Network error:', error);
      return false;
    }
  };

  const createHotelServiceRecord = async (petId) => {
    try {
      const serviceData = {
        pet_id: petId,
        type: 'Hotel Accommodation',
        provider: 'Hotel Bicho Solto',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'In Progress',
        price: '35€/day',
      };

      const response = await fetch('http://localhost:5000/api/pet-services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        console.log('Hotel service record created successfully');
        return true;
      } else {
        console.error('Error creating hotel service record');
        return false;
      }
    } catch (error) {
      console.error('Network error creating hotel service:', error);
      return false;
    }
  };

  useEffect(() => {
    const assignHotel = async () => {
      const petId = localStorage.getItem('selectedPetId');
      if (petId) {
        const assignmentSuccess = await assignHotelToPet(parseInt(petId));
        if (assignmentSuccess) {
          await createHotelServiceRecord(parseInt(petId));
        }
        localStorage.removeItem('selectedPetId');
        localStorage.removeItem('selectedPetData');
        window.dispatchEvent(new Event('storage'));
      }
    };
    assignHotel();
  }, []);

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
      textAlign: 'center',
      color: '#000',
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
      position: 'relative',
      zIndex: 1,
      userSelect: 'none',
    },
    logoImage: {
      width: '160px',
      userSelect: 'none',
    },
    successText: {
      marginTop: '30px',
      fontSize: '2rem',
      fontWeight: '900',
      color: '#2D2432',
      userSelect: 'none',
    },
    checkmarkContainer: {
      marginTop: '40px',
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      backgroundColor: '#C8F7D4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      userSelect: 'none',
      cursor: 'pointer',
    },
    checkmarkCircleMiddle: {
      width: '110px',
      height: '110px',
      borderRadius: '50%',
      backgroundColor: '#7CE582',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkmarkCircleInner: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: '#0ED53F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkmarkIcon: {
      width: '40px',
      height: '40px',
      stroke: 'white',
      strokeWidth: 3,
    },
    amountText: {
      marginTop: '40px',
      fontSize: '1.5rem',
      color: '#2D2432',
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
      <div style={styles.header}>
        <img
          src="/images/bichosolto-logo.png"
          alt="Bichosolto Logo"
          style={styles.logoImage}
          draggable={false}
        />
      </div>

      <div style={styles.successText}>Payment Successful</div>

      <div
        style={styles.checkmarkContainer}
        onClick={() => navigate('/OwnerHomeInterface')}
        title="Go to Home"
      >
        <div style={styles.checkmarkCircleMiddle}>
          <div style={styles.checkmarkCircleInner}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={styles.checkmarkIcon}
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>

      <div style={styles.amountText}>Amount paid: 15€</div>

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

export default PaymentSuccessful;
