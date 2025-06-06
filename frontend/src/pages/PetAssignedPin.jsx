import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '@fontsource/londrina-solid';

const PetAssignedPin = () => {
  const navigate = useNavigate();
  const { petName } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get pet data from localStorage first
    const storedPetData = localStorage.getItem('selectedPetData');
    if (storedPetData) {
      setPet(JSON.parse(storedPetData));
      setLoading(false);
      return;
    }

    // If not in localStorage, fetch from API using petName
    if (petName) {
      fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error('Pet não encontrado:', data.error);
          } else {
            setPet(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do pet:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [petName]);

  const styles = {
    page: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Londrina Solid', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    ellipse: {
      width: '110%',
      height: '75%',
      top: '-45%',
      left: '-5%',
      position: 'absolute',
      background: '#2D2432',
      borderRadius: '50%',
      border: '20px #2D2432 solid',
    },
    image: {
      width: 'clamp(150px, 40vw, 200px)',
      height: 'clamp(150px, 40vw, 200px)',
      borderRadius: '30px',
      marginTop: '5rem',
      objectFit: 'cover',
      border: '3px solid rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    name: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      zIndex: 1,
      color: '#000',
    },
    species: {
      fontSize: '1.5rem',
      color: '#2D2432',
      zIndex: 1,
    },
    gender: {
      color: '#F4B942',
      fontSize: '1.5rem',
      zIndex: 1,
    },
    age: {
      fontSize: '1.2rem',
      color: '#78588A',
      zIndex: 1,
      marginBottom: '1rem',
    },
    pinLabel: {
      marginTop: '1.5rem',
      fontSize: '1rem',
      letterSpacing: '2px',
      zIndex: 1,
    },
    pinText: {
      fontSize: '0.9rem',
      color: '#555',
      marginBottom: '1rem',
      zIndex: 1,
    },
    qr: {
      width: '180px',
      height: '180px',
      zIndex: 1,
      cursor: 'pointer',
    },
    code: {
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      zIndex: 1,
    },
    backArrow: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 2,
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer',
    },
    footer: {
      position: 'absolute',
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
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    loadingText: {
      marginTop: '50%',
      color: '#2D2432',
      fontSize: '1.5rem',
      zIndex: 1,
    },
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.ellipse}></div>
        <div style={styles.backArrow} onClick={() => navigate(-1)}>←</div>
        <div style={styles.loadingText}>Loading pet information...</div>
      </div>
    );
  }

  if (!pet) {
    return (
      <div style={styles.page}>
        <div style={styles.ellipse}></div>
        <div style={styles.backArrow} onClick={() => navigate(-1)}>←</div>
        <div style={styles.loadingText}>Pet not found</div>
      </div>
    );
  }

  // Generate a unique code based on pet ID and name
  const generatePinCode = (petId, petName) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const seed = petId + petName.length;
    
    for (let i = 0; i < 11; i++) {
      result += chars.charAt((seed * (i + 1)) % chars.length);
    }
    return result;
  };

  const pinCode = generatePinCode(pet.id, pet.name);

  return (
    <div style={styles.page}>
      <div style={styles.ellipse}></div>

      <div style={styles.backArrow} onClick={() => navigate(-1)}>←</div>

      <img
        src={pet.image}
        alt={pet.name}
        style={styles.image}
        onError={(e) => {
          // Fallback image if the pet image fails to load
          e.target.src = '/images/logo.png';
        }}
      />

      <div style={styles.name}>{pet.name}</div>
      <div style={styles.species}>
        {pet.race} <span style={styles.gender}>({pet.gender})</span>
      </div>
      <div style={styles.age}>{pet.age} years old</div>

      <div style={styles.pinLabel}>PIN</div>
      <div style={styles.pinText}>Present this to the pet-care taker</div>

      <img
        src="/images/qr.png"
        alt={`${pet.name} QR`}
        style={styles.qr}
        onClick={() => navigate('/OwnerReview')}
      />
      <div style={styles.code}>{pinCode}</div>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home-on.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img 
            src="/images/map.svg" 
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

export default PetAssignedPin;