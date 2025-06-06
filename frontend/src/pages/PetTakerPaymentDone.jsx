import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessfulPetTaker = () => {
  const navigate = useNavigate();

  // Function to assign caretaker after successful payment
  const assignCaretakerToPet = async (petId, caretakerId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pets/${petId}/assign-caretaker`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ caretaker_id: caretakerId }),
      });
      
      if (response.ok) {
        console.log('Caretaker assigned successfully after payment');
        return true;
      } else {
        console.error('Error assigning caretaker');
        return false;
      }
    } catch (error) {
      console.error('Network error:', error);
      return false;
    }
  };

  // Function to create a service record after successful payment
  const createServiceRecord = async (petId, caretakerId) => {
    try {
      const serviceData = {
        pet_id: petId,
        type: 'Pet-sitting',
        provider: 'João Ferreira', // This should be dynamic based on caretakerId
        startDate: new Date().toISOString().split('T')[0], // Today's date
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
        status: 'In Progress',
        price: '25€/day'
      };

      const response = await fetch('http://localhost:5000/api/pet-services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        console.log('Service record created successfully');
        return true;
      } else {
        console.error('Error creating service record');
        return false;
      }
    } catch (error) {
      console.error('Network error creating service:', error);
      return false;
    }
  };

  // Add this after successful assignment
  useEffect(() => {
    const assignCaretaker = async () => {
      const petId = localStorage.getItem('selectedPetId');
      const caretakerId = localStorage.getItem('selectedCaretakerId');
      
      if (petId && caretakerId) {
        // First assign the caretaker
        const assignmentSuccess = await assignCaretakerToPet(parseInt(petId), parseInt(caretakerId));
        
        // Then create service record if assignment was successful
        if (assignmentSuccess) {
          await createServiceRecord(parseInt(petId), parseInt(caretakerId));
        }
        
        // Clean up localStorage after assignment
        localStorage.removeItem('selectedPetId');
        localStorage.removeItem('selectedCaretakerId');
        localStorage.removeItem('selectedPetData'); // Clear stored pet data to force refresh
        
        // Trigger storage event to refresh OwnerHomeInterface
        window.dispatchEvent(new Event('storage'));
      }
    };

    assignCaretaker();
  }, []);

  // ... rest of the component remains the same
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
      height: '180px',
      backgroundColor: '#2D2432',
      borderBottomLeftRadius: '50% 90px',
      borderBottomRightRadius: '50% 90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      userSelect: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
    },

    profileImage: {
      width: '120px',
      height: '120px',
      borderRadius: '20px',
      objectFit: 'cover',
      border: '3px solid white',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      userSelect: 'none',
    },

    successText: {
      marginTop: '100px',
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
      marginBottom: '20px',
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
      marginTop: '10px',
      fontSize: '1.5rem',
      color: '#2D2432',
      userSelect: 'none',
      fontWeight: '600',
      marginBottom: '30px',
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
      {/* Header with profile image */}
      <div style={styles.header}>
        <img
          src="/images/joao_ferreira.jpg"
          alt="João Ferreira"
          style={styles.profileImage}
          draggable={false}
        />
      </div>

      {/* Success text */}
      <div style={styles.successText}>Payment Successful</div>

      {/* Checkmark circles */}
      <div style={styles.checkmarkContainer}>
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

      {/* Amount paid */}
      <div style={styles.amountText}>Amount paid: 15€</div>

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

export default PaymentSuccessfulPetTaker;