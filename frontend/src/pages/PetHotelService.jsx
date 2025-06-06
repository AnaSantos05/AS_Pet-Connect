import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const baseFont = "'Londrina Solid', cursive, sans-serif";

export const PetHotelDetailsWithForm = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState('');
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    hour: '',
    notes: ''
  });

  // Fetch user's pets on component mount
  useEffect(() => {
    const fetchUserPets = async () => {
      const ownerId = localStorage.getItem('userId');
      if (ownerId) {
        try {
          const response = await fetch(`http://localhost:5000/api/pets?owner_id=${ownerId}`);
          if (response.ok) {
            const data = await response.json();
            setPets(data);
          }
        } catch (error) {
          console.error('Error fetching pets:', error);
        }
      }
    };

    fetchUserPets();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Validate that a pet is selected
    if (!selectedPet) {
      alert('Please select a pet');
      return;
    }

    // Store the selected pet ID for hotel assignment
    localStorage.setItem('selectedPetId', selectedPet);
    
    // Store form data if needed
    localStorage.setItem('hotelServiceData', JSON.stringify({
      ...formData,
      petId: selectedPet
    }));

    // Navigate to payment
    navigate('/PetHotelPaymentChoice');
  };

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: baseFont,
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
      marginBottom: '10px',
      textAlign: 'center',
      color: '#2D2432',
      lineHeight: 1.3,
      zIndex: 1,
    },

    ellipsisIcon: {
      color: '#2D2432',
      cursor: 'pointer',
    },

    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginTop: '1.5rem',
      fontFamily: baseFont,
      color: '#2D2432',
      zIndex: 1,
      userSelect: 'none',
    },

    formGroup: {
      width: '90%',
      maxWidth: '320px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginTop: '1rem',
      zIndex: 1,
    },

    inputRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'space-between',
    },

    label: {
      minWidth: '60px',
      fontWeight: 'bold',
      color: '#2D2432',
      userSelect: 'none',
    },

    input: {
      flex: 1,
      height: '2.2rem',
      background: '#C2C2C2',
      border: '1px solid black',
      padding: '0.4rem',
      fontSize: '1rem',
      fontFamily: baseFont,
      color: '#525252',
      borderRadius: '8px',
    },

    select: {
      flex: 1,
      height: '2.2rem',
      background: '#C2C2C2',
      border: '1px solid black',
      padding: '0.4rem',
      fontSize: '1rem',
      fontFamily: baseFont,
      color: '#525252',
      borderRadius: '8px',
    },

    textarea: {
      width: '100%',
      height: '4.5rem',
      background: '#C2C2C2',
      border: '1px solid black',
      padding: '0.5rem',
      fontSize: '1rem',
      fontFamily: baseFont,
      color: '#525252',
      borderRadius: '8px',
      resize: 'vertical',
    },

    icon: {
      fontSize: '1.5rem',
      color: '#380D51',
      userSelect: 'none',
    },

    submitButton: {
      width: '44px',
      height: '44px',
      background: '#380D51',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.5rem',
      alignSelf: 'flex-end',
      cursor: 'pointer',
      zIndex: 1,
      userSelect: 'none',
      border: 'none',
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

    backButton: {
      position: 'absolute',
      top: '20px',
      left: '15px',
      fontSize: '28px',
      color: 'white',
      cursor: 'pointer',
      zIndex: 15,
      userSelect: 'none',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header curved background */}
      <div style={styles.header} />

      {/* Back arrow */}
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backButton}
        onClick={() => navigate(-1)}
        title="Go back"
      />

      {/* Logo & rating */}
      <div style={styles.logoContainer}>
        <img
          style={styles.logoImage}
          src="/images/bichosolto-logo.png"
          alt="Bichosolto Logo"
          draggable={false}
        />

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
          <FontAwesomeIcon icon={faEllipsisVertical} style={styles.ellipsisIcon} />
        </div>

        <div style={styles.address}>
          Rua das Camélias, 55, <br /> AVEIRO
        </div>
      </div>

      {/* Section title */}
      <div style={styles.sectionTitle}>REQUEST SERVICES</div>

      {/* Form */}
      <div style={styles.formGroup}>
        <div style={styles.inputRow}>
          <label style={styles.label}>Type:</label>
          <select 
            style={styles.select} 
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
          >
            <option value="">Select a type</option>
            <option value="accommodation">Accommodation</option>
            <option value="daycare">Daycare</option>
            <option value="grooming">Grooming</option>
            <option value="training">Training</option>
          </select>
        </div>
        
        <div style={styles.inputRow}>
          <label style={styles.label}>Date:</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
            <input 
              style={styles.input} 
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
            <span style={styles.icon} role="img" aria-label="calendar">
              🗓️
            </span>
          </div>
        </div>
        
        <div style={styles.inputRow}>
          <label style={styles.label}>Hour:</label>
          <input 
            style={styles.input} 
            type="time"
            value={formData.hour}
            onChange={(e) => handleInputChange('hour', e.target.value)}
          />
        </div>
        
        <div>
          <label style={styles.label}>Pet:</label>
          <select 
            style={styles.select}
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
            <option value="">Select the pet</option>
            {pets.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name} ({pet.race})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label style={styles.label}>Notes:</label>
          <textarea
            style={styles.textarea}
            placeholder="Put here medication, prescription, notes about the treatment or the pet"
            value={formData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button
          style={styles.submitButton}
          onClick={handleSubmit}
          title="Submit"
          type="button"
        >
          ✔
        </button>
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

export default PetHotelDetailsWithForm;